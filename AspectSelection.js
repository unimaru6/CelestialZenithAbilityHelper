// function ---------------------------------------------------------------------------------------------------------------------------------------
/**
 *  ツリーに対応するaspectを取得
 *  @param tree スキルツリー名
 *  @param aspectsList スキルツリーと対応するaspectのリスト
 *  @return 対応するaspect
 */
function getAspectOfTree(tree, aspectsList) {
    return aspectsList[tree].aspect;
}

/**
 *  containerに存在するアイテム名を取得
 *  @param slot containerのスロット数
 *  @return containerに存在する二次元アイテムリスト、[アイテム名,スロット番号]
 */
function getItemsInContainer(slot) {
    let containerItems = [];
    for (let i = 0; i < slot; i++) {
        let slot = event.inventory.getSlot(i);
        if (slot.getItemId() !== "minecraft:air" && slot.getName().getString() !== "" && slot.getItemId() !== "minecraft:red_stained_glass_pane") {
            containerItems.push([slot.getName().getString(), i]);
        }
    }
    return containerItems;
}

/**
 *  ハイライトするスロットを取得
 *  @param aspect aspect名
 *  @param data containerに存在するアイテムのリスト
 *  @return 対応するものがあった場合そのaspectのスロット番号、なかった場合upgradeのスロット番号
 */
function getHighlightSlot(aspect, data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i][0] == aspect) {
            return data[i][1];
        }
    }
    return data[data.length - 1][1];
}

/**
 *  containerに存在するアイテム名を取得
 *  @param slot containerのスロット番号
 *  @param screenWidth スクリーンの横幅
 *  @param screenHeight スクリーンの縦幅
 *  @return 座標リスト、[x1, x2, y1, y2]
 */
function getRectLocation(slot, screenWidth, screenHeight) {
    let xDistance = slot % 9;
    let yDistance = Math.floor(slot / 9);
    let distance = [xDistance, yDistance];

    let x1 = Math.floor(screenWidth / 2 - 64 + distance[0] * 18);
    let x2 = Math.floor(screenWidth / 2 - 80 + distance[0] * 18);
    let y1 = Math.floor(screenHeight / 2 - 50 + distance[1] * 18);
    let y2 = Math.floor(screenHeight / 2 - 66 + distance[1] * 18);

    return [x1, x2, y1, y2];
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------

// changeable ------------------------------------------------
const aspectsList = {
    "Shadowdancer": { "aspect": "Aspect of the Sword" },
    "Steelsage": { "aspect": "Aspect of the Wand" },
    "Dawnbringer": { "aspect": "Aspect of the Wand" },
    "Earthbound": { "aspect": "Aspect of the Sword" },
    "Frostborn": { "aspect": "Aspect of the Wand" },
    "Flamecaller": { "aspect": "Aspect of the Wand" },
    "Windwalker": { "aspect": "Aspect of the Wand" }
};

//-------------------------------------------------------------

const maintree = GlobalVars.getString("maintree");
const screenWidth = event.screen.getWidth();
const screenHeight = event.screen.getHeight();

let data = [];
let aspect = "";
let distanceList = [];
let slot;

Time.sleep(50);

if (event.inventory.getContainerTitle() == "Select an Aspect") {
    aspect = getAspectOfTree(maintree, aspectsList);
    data = getItemsInContainer(27);

    slot = getHighlightSlot(aspect, data);
    distanceList = getRectLocation(slot, screenWidth, screenHeight);
    event.screen.addRect(distanceList[0], distanceList[2], distanceList[1], distanceList[3], 0xFFFF00);

}
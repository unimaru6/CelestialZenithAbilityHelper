// function ---------------------------------------------------------------------------------------------------------------------------------------
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

/**
 *  containerに存在するアイテム名を取得
 *  @param slot containerのスロット数
 *  @return containerに存在するアイテムリスト、[アイテム名,スロット番号]
 */
function getItemsInContainer(slot) {
    let containerItems = [];
    for (let i = 0; i < slot; i++) {
        let slot = event.inventory.getSlot(i);
        if (slot.getItemId() !== "minecraft:air" && slot.getName().getString() !== "") {
            containerItems.push([slot.getName().getString(), i]);
        }
    }
    return containerItems;
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------

// changeable ------------------------------------------------
const tier = [
    ["Boss Challenge"],
    ["Utility Room"],
    ["Normal Room with Upgrade Reward", "Normal Room with Ability Reward"],
    ["Wildcard Room"],
    ["Elite Room with Ability Reward", "Elite Room with Upgrade Reward"]
];
//-------------------------------------------------------------


const screenWidth = event.screen.getWidth();
const screenHeight = event.screen.getHeight();
let prioritize = 100;

let distanceList = [];
let output = [];
let data = [];

Time.sleep(50);

if (event.inventory.getContainerTitle() == "Select the Next Room Type") {
    data = getItemsInContainer(27);
    Chat.log(data);

    for (let item of data) {    //data : containerに含まれる物体名リスト
        for (let i = 0; i < tier.length; i++) {
            if (!(prioritize < i)) {
                if (tier[i].includes(item[0])) {
                    if (prioritize != i) {  //以前にoutputに低tierのものが入っている場合削除
                        output.splice(0);
                    }
                    output.push(item);
                    prioritize = i;
                    break;
                }
            }
        }
    }

    for (let i = 0; i < output.length; i++) {
        distanceList = getRectLocation(output[i][1], screenWidth, screenHeight);
        event.screen.addRect(distanceList[0], distanceList[2], distanceList[1], distanceList[3], 0xFFFF00);
    }
}

/*
GlobalVars set
---------------------------
String tree0~7(max) 現在あるtree
Int treeCount 現在あるtreeの数
*/

function getItemsInContainer(slot) {
    let containerItems = [];
    let playerName = Player.getPlayer().getPlayerName();
    for (let i = 0; i < slot; i++) {
        let slot = event.inventory.getSlot(i);
        if (slot.getItemId() !== "minecraft:air" && slot.getName().getString() !== "" && slot.getName().getString() !== `${playerName}'s Abilities`) {
            containerItems.push([slot.getName().getString(), i]);
        }
    }
    return containerItems;
}

let data;
let output;

Time.sleep(50);

if (event.inventory.getContainerTitle() == "Current Abilities") {

    data = getItemsInContainer(9);
    for (let i = 0; i < data.length; i++) {
        GlobalVars.putString(`tree${i}`, data[i][0].toString());
    }
    GlobalVars.putInt("treeCount", data.length);

    Chat.log(
        Chat.createTextBuilder()
            .append("[").withColor(0x7)
            .append("CZHelper").withColor(0x5)
            .append("] ").withColor(0x7)
            .append(`Your tree has been updated.`).withColor(0xc)
            .build()
    );

}
/*
GlobalVars set
---------------------------
String maintree 最初に選択したtree
*/



const serverMsg = event.text.getString();
const dimension = World.getDimension();

const treeList = ["Shadowdancer", "Flamecaller", "Earthbound", "Windwalker", "Frostborn", "Dawnbringer", "Steelsage"];
let treePattern = new RegExp(`^\\[Zenith Party\\] You have selected the (${treeList.join("|")}) tree!$`);
let dimensionPattern = new RegExp("^minecraft:zenith\\d*$");


if (dimensionPattern.test(dimension)) {
    if (treePattern.test(serverMsg)) {
        let result = serverMsg.match(treePattern);
        GlobalVars.putString("maintree", result[1]);

        // priority adjustment


        Chat.log(
            Chat.createTextBuilder()
                .append("[").withColor(0x7)
                .append("CZHelper").withColor(0x5)
                .append("] ").withColor(0x7)
                .append(`Your main skill tree has been set to ${result[1]}.`).withColor(0xc)
                .build()
        );
        Chat.log(
            Chat.createTextBuilder()
                .append("[").withColor(0x7)
                .append("CZHelper").withColor(0x5)
                .append("] ").withColor(0x7)
                .append("Open the Depth Trinket to update your own tree.").withColor(0xc)
                .build()
        );
        Chat.log(GlobalVars.getString("maintree"));
    }
}
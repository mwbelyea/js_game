let rupeeGreen = 2;
let rupeeBlue = 5;
let rupeeRed = 20;
let rupeeSilver = 100;

let wallet = 0;

function collectRupee(rupee) {
    wallet = wallet + rupee;
};

function spendRupee(rupee) {
    wallet = wallet - rupee;
};

//Store the image as base64, and store the base 64 in a variable.
//Art from https://opengameart.org/art-search?keys=sword
let sword = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAABwgAAAcIAHND5ueAAAA80lEQVRYw82XWwqDMBBFR4eurJ+uIy6hy3EPQvZT6A6E/srtTyM2+IiZB71/GpNzmAQyEgkDoJHMF02+GmbG+nmeZz8+MyPGiBgjACDJtF7wcRyJiKjrOur7fhkzFziCExmfgT34MAzL/psJlMDNBErhJgJX4OoCV+GqAjVwNYFauIqABC4WkMJFAhrwagEteJWAJnxXIF2V+YLacKKD23B6tj8NhAX8tNTv1w3MjLyZCCEghIC8wzGVcIdvSbjDk0C+Ha7wx71BLuEOX79zkdiCl0gAkDe5R/D1N+pVSIuewU2Syup6yL5x+TMqroJ76f8hHz5PGmdqYYEdAAAAAElFTkSuQmCC";
let shield = "mike";
// let healthPotion =

let playerInventory = [sword, shield];
// let potionShopInventory = ["redPotion", "bluPotion"];

let potionShopInventory = {
    "redPotion": 10,
    "bluePotion": 25
}

//function to add item to inventory if transaction is a success
function addItemToInventory(purchasedItem) {
    return playerInventory.push(purchasedItem);
};


//When purchasing an item, deduct rupees from the wallet:
function transact(item) {
    //capture amount of item using Object.(item) or Object.values
    //Deduct that amount from wallet
    if (wallet < item) {
        return null;
    } else {
        //Now deduct the rupees from the wallet
        wallet = wallet - item;
        addItemToInventory();
        return "success";
    }
};


//Now, tie objects and prices together. Then, separate the two upon a purchase. The item is added to the inventory, the price is deducted from the wallet.
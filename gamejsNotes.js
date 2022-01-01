let gem1 = 1;
let gem2 = 2;
let gem5 = 5;
let gem10 = 10;
let gem20 = 20;
let gem50 = 50;
let gem100 = 100;

// let gemCollect = function (gemFound) {
//     let base = 1;
//     return base * gemFound;
// };

//The below function let you pass a predefined gem with a certain value as an argument, then returns that value.
//This function has the same behaviour as above. In Colt's course, the below syntax is used:
// function gemCollect(gemFound) {
//     let base = 1;
//     return base * gemFound;
// };

//This will be simpler than the function above:

function gemCollect(gem) {
    return gem;
}

let name = "Mike";

//hint: in this function, to prevent any arguement from being passed, you can look at the typeof method and create a conditional when 
//creating the function. E.g:

// function makeNoise (sound) {
//     if (typeof sound !== "string") {
//         return "false";
//     }
//     return sound;
// };

//Now that you have collected a gem, you can store the value in a variable:
//let wallet = gemCollect(gem10);
//but now how do you store the amount and add more when collecting more gems? This can be done through concatenation, e.g.:
// let newWalletBalance = newWalletBalance + gemCollect(gem1);
//Then you can deduct from the wallet, e.g. let wallet = wallet - gemCollect(gem1);

//let rupeeGreen = 2;

// function collectRupee(rupee) {
//     return rupee;
// }

// let wallet = collectRupee(rupeeGreen)
//expected output: 2

// wallet
//expected output: 2

// let wallet = wallet + collectRupee(rupeeGreen);

// wallet
//expected output: 4

// ****

// Another example:

// let wallet = 0;
// function collectRupees(rupee) {
//     wallet = wallet + rupee;
// };

// let rupeeGreen = 2;
// let rupeeBlue = 5;
// let rupeeRed = 20;

// collectRupees(rupeeGreen);

// wallet;
// expected to return 2

// function spendRupees(rupee) {
//     wallet = wallet - rupee;
// };

// spendRupees(rupeeGreen);

// wallet
// expected to remove 2



//Selects the first element that matches
document.querySelector("#generate").addEventListener("click", writePassword);

//Arrays for the Password Generator
let specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "~"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//
let confirmLength = "";
let confirmUpperCase;
let confirmLowerCase;
let confirmNumberCharacter;
let confirmSpecialCharacter;

function generatePassword() {
  confirmLength = (prompt("What would you like the length of the password to be?"));

    if (confirmLength <= 8 || confirmLength >= 128) {
        confirmLength = prompt("Password length must between 8-128 characters", "");

}

}



//Selects the first element that matches
document.querySelector("#generate").addEventListener("click", generatePassword);

//Arrays for the Password Generator
let specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "~"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Variables for password criteria
let confirmLength = "";
let confirmUpperCase;
let confirmLowerCase;
let confirmNumberCharacter;
let confirmSpecialCharacter;

//
function generatePassword() {
  confirmLength = (prompt("What length would you like your password? It must be 8-128 characters."));

    if (confirmLength <= 8 || confirmLength >= 128) {
        confirmLength = prompt("Password length must between 8-128 characters", "");
}

// Choosing criteria for password
confirmUpperCase = confirm("Would you like upper case letters in your password?");
confirmLowerCase = confirm("Would you like lower case letters in your password?");
confirmSpecialCharacter = confirm("Would you like special characters in your password?");
confirmNumberCharacter = confirm("Would you like numbers in your password?");

//Loop if they do not choose at least one criteria 

if (confirmUpperCase=== false && confirmLowerCase=== false && confirmSpecialCharacter===false && confirmNumberCharacter=== false){
  alert("At least one criteria for password must be selected.");
  confirmUpperCase = confirm("Would you like upper case letters in your password?");
  confirmLowerCase = confirm("Would you like lower case letters in your password?");
  confirmSpecialCharacter = confirm("Would you like special characters in your password?");
  confirmNumberCharacter = confirm("Would you like numbers in your password?");
}



}



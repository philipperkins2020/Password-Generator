//Selects the first element that matches
document.querySelector("#generate").addEventListener("click", writePassword);

//Arrays for the Password Generator
let specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "~"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Variables for password criteria
let confirmLength = "";
let confirmUpperCase = false;
let confirmLowerCase = false;
let confirmNumberCharacter= false;
let confirmSpecialCharacter = false;
let password = "";

// Generating the password from criteria selected
function generatePassword() {
var userInput = getUserInput()
console.log(userInput)

//Array for storing characters
let userChar = []

//Conditionals to check which characters to be included
if (userInput.confirmUpperCase===true){
  userChar=userChar.concat(upperCase)
}
if (userInput.confirmLowerCase===true){
  userChar=userChar.concat(lowerCase)
}
if (userInput.confirmNumberCharacter===true){
  userChar=userChar.concat(numbers)
}
if (userInput.confirmSpecialCharacter===true){
  userChar=userChar.concat(specialChar)
}
console.log(userChar)
//Creates the password randomnly based on criteria selected by user
for (let i=1; i<= userInput.confirmLength; i++){
  const randomNumber= Math.floor(Math.random() * userChar.length) 
  console.log(randomNumber)
  const randomLetter= userChar[randomNumber]
  console.log(randomLetter)
  password+=randomLetter
}
console.log(password)
return password

}
//Function to gather the criteria the user selects
function getUserInput() {
  confirmLength = prompt("What length would you like your password? It must be 8-128 characters.");

  //User must choose length between 8-128 characters
  if (confirmLength < 8 || confirmLength > 128) {
    getUserInput()
  }

  // Choosing criteria for password
  confirmUpperCase = confirm("Would you like upper case letters in your password?");
  confirmLowerCase = confirm("Would you like lower case letters in your password?");
  confirmSpecialCharacter = confirm("Would you like special characters in your password?");
  confirmNumberCharacter = confirm("Would you like numbers in your password?");
 
  //If user does not choose one they will be prompted to try again
  if (confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumberCharacter === false) {
    alert("At least one criteria for password must be selected.");
    getUserInput()
  }
 return {
   confirmLength: confirmLength,
   confirmUpperCase: confirmUpperCase,
   confirmLowerCase: confirmLowerCase,
   confirmNumberCharacter: confirmNumberCharacter,
   confirmSpecialCharacter: confirmSpecialCharacter
 }

}
//Provides the password in the DOM
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}










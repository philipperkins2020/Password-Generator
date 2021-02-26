
document.querySelector("#generate").addEventListener("click", writePassword);

const specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "~"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function generatePassword() {
  let password = ""
  const userInput = getUserInput()
  let userChar = []

  if (userInput.confirmUpperCase === true) {
    userChar = userChar.concat(upperCase)
  }
  if (userInput.confirmLowerCase === true) {
    userChar = userChar.concat(lowerCase)
  }
  if (userInput.confirmNumberCharacter === true) {
    userChar = userChar.concat(numbers)
  }
  if (userInput.confirmSpecialCharacter === true) {
    userChar = userChar.concat(specialChar)
  }

  for (let i = 1; i <= userInput.confirmLength; i++) {
    const randomNumber = Math.floor(Math.random() * userChar.length)
    const randomLetter = userChar[randomNumber]
    password += randomLetter
  }

  return password
}

function getUserInput() {
  const confirmLength = prompt("What length would you like your password? It must be 8-128 characters.");

  if (confirmLength < 8 || confirmLength > 128) {
    getUserInput()
  }

  const confirmUpperCase = confirm("Would you like upper case letters in your password?");
  const confirmLowerCase = confirm("Would you like lower case letters in your password?");
  const confirmSpecialCharacter = confirm("Would you like special characters in your password?");
  const confirmNumberCharacter = confirm("Would you like numbers in your password?");

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

function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}










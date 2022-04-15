// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// passwordValidation to check if the parameter userInput after the prompt is true. If not it returns false and the user will have to try again.
var passwordValidation = (userInput) => {
  if (userInput === null) {
    alert("Please try again.")
    return false
  } else if (userInput < 8 || userInput >128) {
    alert("Your password must be between 8 and 128 numerical characters long.")
    return false
  } else if (isNaN(userInput)){
    alert("Please enter a valid number input.")
    return false
  }
  return true
};

// array that will contain all the character variables needed
let numCase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
let specCase = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
let lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// function named userConfirmationInput that passes passwordLength as a parameter.
var userConfirmationInput = (passwordLength) => {
  let passwordArray = [];

  let isLow = confirm("Include lower case letters?");
  let isUp = confirm('Include upper case letters?');
  let isNum = confirm('Include numbers?');
  let isSpec = confirm('Include special characters?');

  let randomSelectionArray = []

  // three options true
  if (!isLow && isUp && isNum) {
    randomSelectionArray = randomSelectionArray.concat(lowCase, upCase, numCase);
  } else if (isLow && isUp && isSpec) {
    randomSelectionArray = randomSelectionArray.concat(lowCase, upCase, specCase);
  } else if (isLow && isNum && isSpec) {
    randomSelectionArray = randomSelectionArray.concat(lowCase, numCase, specCase);
  } else if (isUp && isNum && isSpec) {
    randomSelectionArray = randomSelectionArray.concat(upCase, numCase, specCase);

    // two options true
  } else if (isLow && isUp) {
    randomSelectionArray = randomSelectionArray.concat(lowCase, upCase);
  } else if (isLow && isNum) {
    randomSelectionArray = randomSelectionArray.concat(lowCase, numCase);
  } else if (isLow && isSpec) {
    randomSelectionArray = randomSelectionArray.concat(lowCase, specCase);
  } else if (isUp && isSpec) {
    randomSelectionArray = randomSelectionArray.concat(upCase, specCase);
  } else if (isNum && isSpec) {
    randomSelectionArray = randomSelectionArray.concat(numCase, specCase);

    // one option true
  } else if (isLow) {
    randomSelectionArray = randomSelectionArray.concat(lowCase);
  } else if (isUp) {
    randomSelectionArray = randomSelectionArray.concat(upCase);
  } else if (isNum) {
    randomSelectionArray = randomSelectionArray.concat(numCase);
  } else if (isSpec) {
    randomSelectionArray = randomSelectionArray.concat(specCase);
  }

  // For loop below will be based on the length that the user wants the password to be. 
  for (var i = 0; i < passwordLength; i++) {
    let randomCharacter = Math.floor(Math.random() * randomSelectionArray.length);
    passwordArray.push(randomSelectionArray[randomCharacter])
  }
  return passwordArray.join("");
}

var generatePassword = () => {
  var passwordLength = prompt('Please choose a password length between 8 and 128 characters')
  if (passwordValidation(passwordLength)) {
    return (userConfirmationInput(passwordLength))
  } else {}
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

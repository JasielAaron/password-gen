// Assignment Code
var generateBtn = document.querySelector("#generate");

//4 Arrays of characters 
var uppercase = 'ABCDEFGHIJKLMNOPQRSTVUWXYZ' .split("")
var lowercase = 'abcedfghijklmnopqrstuvwxyz' .split("")
var numbers = '1234567890' .split("")
var specialsm ='@!#$%^&*' .split("")

var isUppercase = confim("D you want uppercase letters")
var isLowercase = confim("D you want lowercase letters")
var isNumbers = confim("D you want numbers letters")
var isSpecails = confim("D you want specail characters")



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

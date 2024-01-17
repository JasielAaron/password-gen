//to know how long the password will be/ to store the password
var passwordLenght = 8;
var choicePassword = [];
//to store all the possible passwords

//4 Arrays of characters 
var uppercase = 'ABCDEFGHIJKLMNOPQRSTVUWXYZ'.split("")
var lowercase = 'abcedfghijklmnopqrstuvwxyz'.split("")
var numbers = '1234567890'.split("")
var specialsm = '@!#$%^&*'.split("")


// Assignment Code

var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); //either tells us if they selected the correct prompts returns method true or false, to make sure we can get a password with the correct prompts 
  var passwordText = document.querySelector("#password");

  if (correctPrompts) { //only then we will generate a password if correct prompts 
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }


}


function generatePassword() {
  var password = "";
  for (var i = 0; i < passwordLenght; i++) { //loop 
    var randonCharacter = Math.floor(Math.random() * choicePassword.length);
    password = password + choicePassword[randonCharacter];
  }

  return password; //stops the function

}

//To ask how long the password will be
function getPrompts() {
  passwordlenght = []; //to always resart here
  passwordlenght = parseInt(prompt("How long would you like your password to be? (8 - 128 characters"));
  //condition to meet citeria
  if (isNaN(passwordlenght) || passwordLenght < 8 || passwordLenght > 128) {
    alert("Password length has to be 8 - 128 numbers. Try again"); //If criteria is not meet they have to try again!
    return false; //stops the function!

  }
// to ask what type of letters and characters will be used for password (//Followed Youtube Tutorial to get this code )
  if (confirm("Would you like uppercase letters in your password")) {
    choicePassword = choicePassword.concat(uppercase);
  }

  if (confirm("Would you like lowercase letters in your password")) {
    choicePassword = choicePassword.concat(lowercase);
  }

  if (confirm("Would you like numbers in your password")) {
    choicePassword = choicePassword.concat(numbers);
  }

  if (confirm("Would you like special characters in your password")) {
    choicePassword = choicePassword.concat(specialsm);
  }

  return true; //stops the functions


}








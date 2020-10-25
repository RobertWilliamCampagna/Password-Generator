// Assignment code here
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()+";

var u = false;
var l = false;
var n = false;
var s = false;

var userChoice = ""
var randomPassword;



function generatePassword(){
  var u = false;
  var l = false;
  var n = false;
  var s = false;

  var userChoice = ""
  //  Ask for password length
  var passwordLength = window.prompt("How long would you like your password to be between 8-128 characters?", "8");
  //  Check for apporpriate length, if true ask if they want uppercase characters
  if(passwordLength >= 8 && passwordLength < 129){
    u = window.confirm("Do you want upper-case letters in your password?"); 
  // Request password to be within 8 to 128 characters  
  } else {
    window.alert("Please enter a number between 8 and 128.");
  }
  // If user wants uppercase, add them to userChoice
  if(u){
    u = true;
    userChoice = userChoice + upperCase;
    console.log(userChoice);
  }
  l = window.confirm("Do you want lower-case letters in your password?"); 
  // If user wants lower-case, add them to userChoice
  if(l){
    l = true;
    userChoice = userChoice + lowerCase;
    console.log(userChoice);
  }
  // Ask if user wants numbers in password
  n = window.confirm("Do you want numbers in your password?"); 
  if(n){
    n = true;
    userChoice = userChoice + numbers;
    console.log(userChoice);
  }
  // Ask if user wants special characters in password
  s = window.confirm("Do you want special characters in your password?"); 
  if(s){
    s = true;
    userChoice = userChoice + specialCharacters;
    console.log(userChoice);
  }
  if(u != true && l != true && n != true && s != true){
    window.alert("Please select at least one password parameter");
    generatePassword();
  }

  var randomPassword = ""

  //forloop to select a list of characters that are randomly choosen from the userChoice character prefereces and as long as passwordLength
  for (var i= 0; i < passwordLength; i++){
    //Perform Math.random() by the length of userChoice
    var random = Math.floor(Math.random() * userChoice.length);
    //Assign randomPassword the string value of the randomly selected characters from userChoice
    randomPassword = randomPassword + userChoice.charAt(random);
  }
  //Display random password
  return randomPassword;






}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

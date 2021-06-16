// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "@%+\\/'!#$^?:,(){}[]~-_.";
var pwLength = 0;

/*
var strlen = special.length;
window.alert(strlen);
for (i=0;i<strlen;i++){
  console.log(special.charAt(i));
}
*/

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

function generatePassword() {
  pwLength = getPWLength();

  do {
    var isLower = isCharsetUsed("lowercase letters");
    var isUpper = isCharsetUsed("uppercase letters");
    var isNumeric = isCharsetUsed("numbers");
    var isSpecial = isCharsetUsed("special characters");

    if (!(isLower || isUpper || isNumeric || isSpecial)) {
      window.alert("You must choose at least 1 set of characters!")
    }
  } 
  while (!(isLower || isUpper || isNumeric || isSpecial));
  

  /* testing
  window.alert("lower is " + isLower);
  window.alert("upper is " + isUpper);
  window.alert("numeric is " + isNumeric);
  window.alert("special is " + isSpecial);
  */
  return("12345678");
}

/* This function prompts a user for the length of their password.
   It checks the user has entered a valid number in the range and 
   returns an integer */
function getPWLength() {
  do {
    pwLength = window.prompt("How long is your password? \r\nPlease enter a number between 8 and 128, inclusive.");
    if (pwLength === null) {
      window.alert("Bye");
      return;
    }
    if (isNaN(pwLength)){
      window.alert("You must enter a number");
      pwLength = 0;
    }
    else if (pwLength <8 || pwLength >128) {
      window.alert("You must enter a number between 8 and 128, inclusive. ");
    }
    
    //window.alert("length is " + pwLength);
    //make sure pwLength is an integer
  } while (pwLength <8 || pwLength >128);
  pwLength = parseInt(pwLength);
  return (pwLength);
}
/*This function prompts user if they want to use a character set
  and returns a boolean */
function isCharsetUsed(charSet) {
  var isUsed = window.confirm("Do you want to include " + charSet + " in you password?");
  return(isUsed);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

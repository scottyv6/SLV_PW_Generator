// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "@%+\\/'!#$^?:,(){}[]~-_.";
  var pwLength;
  var isLower;
  var isUpper;
  var isNumeric;
  var isSpecial;
  var charSetString = "";
  var index;
	var pw = "";
 
  // determines which character sets are going to be used
  do {
    isLower = isCharsetUsed("lowercase letters");
    isUpper = isCharsetUsed("uppercase letters");
    isNumeric = isCharsetUsed("numbers");
    isSpecial = isCharsetUsed("special characters");

    // reprompts user for character sets if none were selected
    if (!(isLower || isUpper || isNumeric || isSpecial)) {
      window.alert("You must choose at least 1 set of characters!")
    }
  } 
  while (!(isLower || isUpper || isNumeric || isSpecial));

  // assembles the character set to generate the password
  if (isLower){
    charSetString = charSetString + lower;
  }
  if (isUpper){
    charSetString = charSetString + upper;
  }
  if (isNumeric){
    charSetString = charSetString + numeric;
  }
  if (isSpecial){
    charSetString = charSetString + special;
  }

  pwLength = getPWLength();

  // generates the password with password length and completed character set
  for (var i= 0; i < pwLength; i++){
    index = Math.floor(Math.random() * charSetString.length);
    pw = pw + charSetString.charAt(index);
  }

  return(pw);
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

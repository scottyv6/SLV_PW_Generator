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
  while (pwLength <8 || pwLength >128) {
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
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

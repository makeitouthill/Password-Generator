// Assignment code here
var pwLength;
var includeLowercase;
var includeUppercase;
var includeNumbers;
var includeSpecial;

function promptUser(){
  pwLength = prompt("Enter Password Length (8-128 Characters):")
  includeLowercase = confirm("Include Lowercases characters?:")
  includeUppercase = confirm("Include Lowercases characters?:")
  includeNumbers = confirm("Include Numbers?:")
  includeSpecial = confirm("Include Special Characters?:")
}

function validEntry(){
if(pwLength < 8 || pwLength > 128){
  alert("Password length must be between 8 and 128 characters!");
    return false;
}
  if (!includeLowercase && !includeUppercase && !includeNumbers
  && !includeSpecial){
    alert("Must select atleast one character type to include in the password!");
    return false;
   } 
   return true;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(){
    if (validEntry === true) {
      generatePassword.passwordText
      
    }
  };
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", function(){
  promptUser();
});
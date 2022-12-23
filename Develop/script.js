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
generateBtn.addEventListener("click", function(){
  promptUser();
});
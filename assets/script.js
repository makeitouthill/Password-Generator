// Assignment code here
var pwLength;
var includeLowercase;
var includeUppercase;
var includeNumbers;
var includeSpecial;
var lowerCases = Array.from("abcdefghijklmnopqrstuvwxyz");
var upperCases = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var numbers = Array.from("1234567890");
var specials = Array.from("!@#$%^&*?");

function promptUser(){
  pwLength = parseInt(prompt("Enter Password Length (8-128 Characters):"));
  includeLowercase = confirm("Include Lowercase characters?");
  includeUppercase = confirm("Include Uppercase characters?");
  includeNumbers = confirm("Include Numbers?");
  includeSpecial = confirm("Include Special Characters?");
}

function validEntry() {
  if (pwLength < 8 || pwLength > 128) {
    alert("Password length must be between 8 and 128 characters!");
    return false;
  }
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
    alert("You must select at least one character type to include in the password.");
    return false;
  }
  return true;
}
  function generatePassword() {
    let password = "";
    let charCount = 0;
  
    while (charCount < pwLength) {
      if (includeLowercase && charCount < pwLength) {
        password += getRandomChar(lowerCases);
        charCount++;
      }
      if (includeUppercase && charCount < pwLength) {
        password += getRandomChar(upperCases);
        charCount++;
      }
      if (includeNumbers && charCount < pwLength) {
        password += getRandomChar(numbers);
        charCount++;
      }
      if (includeSpecial && charCount < pwLength) {
        password += getRandomChar(specials);
        charCount++;
      }
    }
  
    return password;
  }

  function getRandomChar(charSet) {
    let index = Math.floor(Math.random() * charSet.length);
    return charSet[index];
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    if (validEntry()) {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    }
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", function() {
    promptUser();
    if (validEntry()) {
      writePassword();
    }
  });
  generateBtn.addEventListener("click", writePassword); 
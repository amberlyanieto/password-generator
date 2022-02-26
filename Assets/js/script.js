// Assignment code here
const keys = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*()_+~|}{[]:;?<>,./-="
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Prompt password length btwn 8 - 128
 var characterLength = window.prompt("How many characters would you like for your password to contain between 8-128?");
    if ((characterLength === "" || characterLength > 128 || characterLength < 8)) {
        characterLength = window.prompt("Number of characters selected does not meet requirements. Please select between 8 - 128.");
     validatePassword();
    } else {
      window.alert("Your character count is " + characterLength);
    }
  // prompt user for the password criteria

  

  // prompt for number, lowercase, upper case, special characters
  var lowercase = window.confirmLowercase("Select OK to include lowercase characters.");

    
  var uppercase = window.confirm("Select OK to include uppercase characters.");

  var numeric = window.confirm("Select OK to include numberic characters.");

  var special = window.confirm("Select OK ito include special characters.");

  //input should be valideated- ensure length, one character tpye selected
  
  // generate  password based on criteria

  // display password on the page 
  return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

 passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

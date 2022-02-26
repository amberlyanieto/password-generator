// Assignment code here
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "|", ",", "}", "{", "[", "]", ":", "?", "<", ">", ",", ".", "/", "-", "="];
var selectedCharacters;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function validatePassword() {
  // Prompt password length btwn 8 - 128
 var characterLength = window.prompt("How many characters would you like for your password to contain between 8-128?");
    if ((characterLength === "" || characterLength > 128 || characterLength < 8)) {
        characterLength = window.prompt("Number of characters selected does not meet requirements. Please select between 8 - 128.");
     validatePassword();
    } else {
      // prompt for number, lowercase, upper case, special characters 
      var lowerConfirm = window.confirm("Select OK to include lowercase characters.");
      var upperConfirm = window.confirm("Select OK to include uppercase characters.");
      var numericConfirm = window.confirm("Select OK to include numberic characters.");
      var specialConfirm = window.confirm("Select OK ito include special characters."); 
    };
    // if no options are selected
    if (!lowerConfirm && !upperConfirm && !numericConfirm && !specialConfirm) {
         window.alert("You must select an option.");
         var lowerConfirm = window.confirm("Select OK to include lowercase characters.");
         var upperConfirm = window.confirm("Select OK to include uppercase characters.");
        var numericConfirm = window.confirm("Select OK to include numberic characters.");
         var specialConfirm = window.confirm("Select OK ito include special characters."); 
    }
    
    //if all options are selected. 
    else if (lowerConfirm && upperConfirm && numericConfirm && specialConfirm) {
      selectedCharacters = lower + upper + numeric + special;
    }
      // if 3 options are selected
    else if (lowerConfirm && upperConfirm && numericConfirm) {
      selectedCharacters = lower + upper + numeric;
    }
    else if (lowerConfirm && upperConfirm && specialConfirm) {
      selectedCharacters = lower + upper + special;
    }
    else if (upperConfirm && numericConfirm && specialConfirm) {
      selectedCharacters = upper + numeric + special;
    }
    else if (lowerConfirm, numericConfirm, specialConfirm) {
      selectedCharacters = lower + numeric + special;
    }
    // if 2 options selected
    else if (upperConfirm, lowerConfirm){
      selectedCharacters = upper + lower;
    }
    else if (upperConfirm, specialConfirm){
      selectedCharacters = upper + special;
    }
    else if (upperConfirm, numericConfirm){
      selectedCharacters = upper + numeric;
    }
    else if (specialConfirm, lowerConfirm){
      selectedCharacters = special + lower;
    }
    else if (numericConfirm, lowerConfirm){
      selectedCharacters = numeric + lower;
    }
    else if (specialConfirm, numericConfirm){
      selectedCharacters = special + numeric;
    }
    // if only 1 option is selected
    else if (upperConfirm) {
      selectedCharacters = upper;
    } 
    else if (lowerConfirm) {
      selectedCharacters = lower;
    } 
    else if (numericConfirm) {
      selectedCharacters = numeric;
    } 
    else if (specialConfirm) {
      selectedCharacters = symbol;
    } 
     
    //random selection of of characters
    for (var i = 0; i < characterLength; i++) {
      var selectedOptions = selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];
      // generate  password based on criteria  
      password = selectedOptions;
    }
     
// display password on the page 
  return password;
};

// Write password to the #password input
function writePassword() {
  var password = validatePassword();
  var passwordText = document.querySelector("#password");

 passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

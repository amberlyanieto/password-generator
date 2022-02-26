// Assignment code here
const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "|", ",", "}", "{", "[", "]", ":", "?", "<", ">", ",", ".", "/", "-", "="];
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
      selectedCharacters = lower.concat(upper, numeric, special);
    }
      // if 3 options are selected
    else if (lowerConfirm && upperConfirm && numericConfirm) {
      selectedCharacters = lower.concat(upper, numeric);
    }
    else if (lowerConfirm && upperConfirm && specialConfirm) {
      selectedCharacters = lower.concat(upper, special);
    }
    else if (upperConfirm && numericConfirm && specialConfirm) {
      selectedCharacters = upper.concat(numeric, special);
    }
    else if (lowerConfirm, numericConfirm, specialConfirm) {
      selectedCharacters = lower.concat(numeric, special);
    }
    



      
    
    
    
  

  
  
    
  
  //input should be valideated- ensure length, one character tpye selected
  
  // generate  password based on criteria

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

//I need to generate a Password//
var password = "";



// I need to create a function to generate this random password//
var passwordGeneration = function() {
  password = "";

  //Inside this function, I need to create a callback function to prompt and store the number of characters for password length - between 8 and 128 characters long.//
  var lengthPassword = passwordLength();

  //I also need to create another callback function that will call on all of the character types that need to be included as selected by the user.//
  var passwordInclusions = charaInclusions();
  var passwordInclusionsLength = passwordInclusions.length;

  //I need a for loop to take the password length selected and add the parameters specified by the user.//
  for (var i = 0; i < lengthPassword; i++) {
    password += passwordInclusions.charAt(Math.floor(Math.random() * passwordInclusionsLength));
  }

  return password;
};

//This is the function call that will retrieve the password length to be used in the function above//
var passwordLength = function() {

  //Within this function, I must prompt the user to enter the desired character length within the parameters.//
  var lengthPass = prompt("Please enter a number for how long you want your password to be. It MUST Be Between 8 and 128 characters long.");

  //Then I have to validate the user choice - does it meet the criteria?//
  if (lengthPass < 8 || lengthPass > 128 || lengthPass === "") {
    alert("Oops! Invalid entry. Try again. Length must be between 8 and 128 characters long.");
    return prompt;
  }

  //Then if the user selction is valid, I need to ensure their selection is a whole number.//
  lengthPass = Math.floor(Number(lengthPass));

  return lengthPass;
}

//I need to define the types of special characters to include in the password.//
var charaInclusions = function() {
  //String to send back inclusions at end//
  var passwordInclusions = "";

  //Then identify the special character Sets//
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChara = "~`!@#$%^&*+<?/;:(=)|{";

  //Then the prompt to ask to include characters//
  var confirmLower = confirm("Want to include Lower Case Characters?");
  var confirmUpper = confirm("Want to include Upper Case Characters");
  var confirmNumber = confirm("Want to inlcude Numbers?");
  var confirmSpecial = confirm("Want to include Special Characters?");

  //Then validate these selections//
  if (confirmLower == true) {
    passwordInclusions += lowerCase;
  }
  if (confirmUpper == true) {
    passwordInclusions += upperCase;
  }
  if (confirmNumber == true) {
    passwordInclusions += numbers;
  }
  if (confirmSpecial == true) {
    passwordInclusions += specialChara;
  }

  //Send the results//
  return passwordInclusions;
}

// Then we need to populate document with result//
var generateBtn = document.querySelector("#generate");

// The function to write the password that's been generated to the document//
function writePassword() {
  var password = passwordGeneration();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button to activate the series of prompts// 
generateBtn.addEventListener("click", writePassword);

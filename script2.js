 
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

//This is the function call that will retrieve the password length//
var passwordLength = function() {

  //Within, we have to prompt the user to enter the desired character length.//
  var lengthPass = prompt("Please enter a number for how long you want your password to be. It MUST Be Between 8 and 128 characters long.");

  //Next, lets validate the user input(Whether user entered invalid length or entered nothing at all)
  if (lengthPass < 8 || lengthPass > 128 || lengthPass === "") {
    alert("Invalid Length Entry. Length Must Be Between 8 and 128 Characters Long.")
    return passwordLength;
  }

  //This turns string into number. Note:refer to documentation if im still confused later.
  lengthPass = Math.floor(Number(lengthPass));

  //This will send data from this function to layout function!
  return lengthPass;
}

//Function That will determine included Character sets
var charaInclusions = function() {
  //String to send back inclusions at end
  var passwordInclusions = "";

  //Character Sets
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChara = "~`!@#$%^&*+<?/;:(=)|{";

  //Ask to include characters(Confirms or Prompts?)
  var confirmLower = confirm("Include Lower Case Characters?");
  var confirmUpper = confirm("Include Upper Case Characters");
  var confirmNumber = confirm("Inlcude Numbers?");
  var confirmSpecial = confirm("Include Special Characters?");

  //Validate Selections
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

  //Send back results
  return passwordInclusions;
}

// Assignment Code Ending
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = passwordGeneration();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

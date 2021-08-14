//I need to generate a password//
var password = "";



//To do so, I need to create a function to generate this random password.//
var passwordGeneration = function () {
  password = "";

  //Then I need to create a callback function that will prompt and store the number of characters for the password length - between 8-128 characters//
  var lengthPassword = passwordLength();

  //I also need to create another callback function that will call on all of the character types that need to be included.//
  var passwordInclusions = charaInclusions();
  var passwordInclusionsLength = passwordInclusions.length;

  //I need a for loop to take the password length selected and add the special characters parameters to it. Using the charAt method to output the specified index.//
  for (var i = 0; i < lengthPassword; i++) {
    password += passwordInclusions.charAt(Math.floor(Math.random() * passwordInclusionsLength));
  }

  return password;
};

//Then I need a function call to retrieve the password length which is used in the function above.//
var passwordLength = function() {
  
  //Within this function, I need to prompt the user to enter the desired length for the password within the parameters given.//
  var lengthPass = prompt("Please enter a number for how long you want your password to be. It MUST be between 8 and 128 characters long.");

  //Then I have to validate the user choice - does it meet the criteria?//
  if (lengthPass <8 || lengthPass > 128 || lengthPass ==="") {
    alert ("Oops! Invalid entry. Try again. You selected an invalid length.");
    return prompt;
  }

  //Then if the user selection is valid, I need to ensure their selection is a whole number.//
  lengthPass = math.floor(Number(lengthPass));

  return lengthPass;
}

//Then I need to define the types of special characters to include.//
var charaInclusions = function () {
  
  var passwordInclusions = "";

  //Below identifies the special characer inclusions//
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialchara = "~`!@#$%^&*+<?/;:(=)|{";

  //Then I need to prompt the user if they want to include the characters//
  var confirmLower = confirm("Do you want to inluce lower case characters?");
  var confirmUpper = confirm("Do you want to include upper case characters?");
  var confirmNumber = confirm("Do you want to include number characters?");
  var confirmSpecial = confirm("Do you want to include special characters?");

  //Then I need to validate these selections as true//
  if (confirmLower == true) {
    passwordInclusions +=lowerCase;
  }
  if (confirmUpper == true) {
    passwordInclusions +=upperCase;
  }
  if (confirmNumber == true) {
    passwordInclusions +=numbers;
  }
  if (confirmSpecial == true) {
    passwordInclusions +=specialchara;
  }
  //Pass the selections through - send the results//
  return passwordInclusions;
}


// This should populate the document with the result.//
var generateBtn = document.querySelector("#generate");

// The function to write the password that's been generated to the document//
function writePassword() {
  var password = passwordGeneration();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button to activate the series of prompts// 
generateBtn.addEventListener("click", writePassword);
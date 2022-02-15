// Assignment code here
function generatePassword() {
  //Creates Local Variables Here
  var charactersTypePick = false;
  var charactersUPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charactersLOWER = "abcdefghijklmnopqrstuvwxyz";
  var charactersNUMERIC = "0123456789";
  var charactersSPECIAL = "~`!@#$%^&*()_+-={}[]|:;'<>,.?/";
  var lowercaseCharacters,
    uppercaseCharacters,
    numericCharacters,
    specialCharacters;
  let passwordGen = "";

  //Ask user for password length
  var passwordLengthInput = window.prompt(
    "How long do you want your password to be? Pick a number between 8 and 128."
  );
  //Filter non-numbers from it
  var passwordLength = passwordLengthInput.replace(/\D/g, "");

  //Checks if the numbers are within range
  if (passwordLength < 8 || passwordLength > 128) {
    //Ask user to re-enter in the length until the condition meets the criteria
    while (passwordLength < 8 || passwordLength > 128) {
      passwordLengthInput = window.prompt(
        "Re-enter a number between 8 and 128."
      );

      //Filter non-numbers from it
      passwordLength = passwordLengthInput.replace(/\D/g, "");
    }
  }
  //=================================================================

  while (charactersTypePick === false) {
    //Ask User for they want to include lowercase
    lowercaseCharacters = window.confirm(
      "Would you like lowercase characters? Click OK for YES. Cancel for NO"
    );

    //Ask User for they want to include uppercase
    uppercaseCharacters = window.confirm(
      "Would you like uppercase characters? Click OK for YES. Cancel for NO"
    );

    //Ask User for they want to include numeric
    numericCharacters = window.confirm(
      "Would you like numeric characters? Click OK for YES. Cancel for NO"
    );

    //Ask User for they want to include special characters
    specialCharacters = window.confirm(
      "Would you like special characters? Click OK for YES. Cancel for NO"
    );

    //Check to see if one character type is validated
    if (
      lowercaseCharacters === false &&
      uppercaseCharacters === false &&
      numericCharacters === false &&
      specialCharacters === false
    ) {
      window.alert(
        "No characters have been selected for the password generator. Please accept one to get a password"
      );
    } else {
      let caseNum, charactersLength;
      let passwordEnter = false;

      //Will create password now
      for (var i = 0; i < passwordLength; i++) {
        //Enters while loop to build password
        while (passwordEnter === false) {
          //Picks which characters to do
          caseNum = Math.floor(Math.random() * 4);

          //Lower case build
          if (caseNum === 0 && lowercaseCharacters === true) {
            charactersLength = charactersLOWER.length;
            passwordGen += charactersLOWER.charAt(
              Math.floor(Math.random() * charactersLength)
            );
            passwordEnter = true;
          }
          //Upper case build
          else if (caseNum === 1 && uppercaseCharacters === true) {
            charactersLength = charactersUPPER.length;
            passwordGen += charactersUPPER.charAt(
              Math.floor(Math.random() * charactersLength)
            );
            passwordEnter = true;
          }
          //Number case build
          else if (caseNum === 2 && numericCharacters === true) {
            charactersLength = charactersNUMERIC.length;
            passwordGen += charactersNUMERIC.charAt(
              Math.floor(Math.random() * charactersLength)
            );
            passwordEnter = true;
          }
          //Special case build
          else if (caseNum === 3 && specialCharacters === true) {
            charactersLength = charactersSPECIAL.length;
            console.log(charactersLength);
            passwordGen += charactersSPECIAL.charAt(
              Math.floor(Math.random() * charactersLength)
            );
            passwordEnter = true;
          }
        }
        passwordEnter = false;
      }
      charactersTypePick = true;
    }
  }
  //Returns the generate password back to writePassword function
  return passwordGen;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //This calls the function generatePassword and it'll ask the user for a series of questions
  var password = generatePassword();

  // This finds the ID Password and saves the ID into passwordText
  var passwordText = document.querySelector("#password");

  //The value in password will replaces the passwordText with the generated password
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateButton = document.querySelector("#generate");

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;


var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#" , "$" , "%" , "@" , "*" , "(" , ")" , "?" , "&" , "^" , ":" , "<" , ">" , "+" , "/" , "~" , "}" , "{" , "=" ,"_", "-"]
function generatePassword() {
  var passwordLength = (prompt("How many characters do you want your password to contain?"));

  console.log("Password length " + passwordLength);

  // Loop if answer is outside the numbers 
 while(passwordLength <= 8 || passwordLength >= 128) {
   alert("Password length must be between 8-128 characters");

 var passwordLength = (prompt("How many characters would you like your password to contain?"));
      } 
 console.log("Password length " + passwordLength);

 var confirmLower =  confirm("Click OK to confirm that your pass contains lowercase characters");
 console.log("Lower case " + confirmLower);
 var confirmUpper = confirm("Click OK to confirm that your pass contains uppercase characters");
 console.log("Upper case"+ confirmUpper)
 var confirmSpecial = confirm("click ok to confirm that your pass contains special charectors");
 console.log("special charactor "+ confirmSpecial)
 var confirmNumber = confirm("Click ok to confirm that your password contains Number")
 console.log("number" +confirmNumber)
 
 
 if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
  providedpassword = lowerCase.concat(upperCase, numbers,special);
  console.log(providedpassword)
 }
 else if (!confirmLower && confirmUpper && confirmNumber){
  providedpassword = upperCase.concat(numbers);
  console.log(providedpassword)
 }
 else if (confirmLower && !confirmUpper && confirmNumber){
  providedpassword = lowerCase.concat(numbers);
  console.log(providedpassword)
 }
 else if (!confirmLower && confirmUpper && confirmNumber && confirmSpecial){
  providedpassword = special.concat(Uppercase,numbers);
  console.log(providedpassword)
  
 }
 else if (confirmLower && confirmUpper && confirmSpecial){
 providedpassword = lowerCase.concat(upperCase,special);
 console.log(providedpassword)
 }
 else if (confirmLower && confirmNumber && confirmSpecial) {
  providedpassword = lowerCase.concat(special,numbers);
  console.log(providedpassword)
 }
  // Loop for random selection
 var randompassword =""
 for (var i = 0; i < passwordLength; i++) {
   var randompassword = randompassword + providedpassword[Math.floor(Math.random() * providedpassword.length)];
  
   console.log(randompassword);
 }
 return randompassword

    }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateButton.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// variable arrays for code
var specials = [
  "!",
  "'",
  "#",
  "$",
  "%",
  "#",
  "&",
  "*",
  "(",
  ")",
  "+",
  "-",
  ",",
  "."
];
// random functions for numbers, lowercase, uppercase and special characters.
function chooseLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  console.log(chooseLowercase);
}
function chooseUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function chooseNumbers() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function chooseLowercase() {
  return specials[Math.floor(Math.random() * specials.length)];
}

// Password random number generated
var generatePassword = function () {
  var confirmLength = prompt(
    "A good password is between 8 - 128 characters. How many characters would you like to use in your password?"
  );
  if (!confirmLength) {
    window.alert("Please enter a valid number. Let's try again.");
    return generatePassword();
  } else if (confirmLength >= 8 && confirmLength <= 128) {
    var chooseNumbers = confirm("Would you like to use numbers?");
    console.log("This is here!");
    console.log(confirmLength);
  }
  return generatePassword();
}
else if (lowercase) {
  var chooseUppercase = confirm("would you like to use uppercase characters?");
  return generatePassword();
}
if (uppercase) {
  var chooseUppercase = confirm("would you like to use uppercase characters?");
}
if (lowercase0) {
  var chooseSpecial = confirm(
    "Would like to use special characters (e.g. <,>,?,@,#,%,etc.)"
  );
}
// generatePassword();

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

document.getElementById("generate").addEventListener("click", function () {
  document.getElementById("password").innerHTML = "Hello Worlds";
});

// Write password to the #password input

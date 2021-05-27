// Assignment Code
var generatePassword = "";
var finalArray = [];

var selectPassword = true;
var passwordLength = "";
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var passNumber = Math.floor(Math.random() * 10);

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
  ".",
];

var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var confirmLength = function () {
  var passLength = alert(
    'A good password is between 8 - 128 characters. Would you like to "Generate a Password"?'
  );
  if (passLength < 8 || passLength > 128) {
    alert(
      "Please enter a valid number for your password length between 8 and 128 characters."
    );
    return confirmLength();
  }
  if (passLength >= 8 && passLength <= 128) {
    chooseUppercase();
    console.log(passLength);
  }
  if (passLength == false) {
    var confirmSkip = confirm(
      "Are you certain you do not want to use the passwrd generator?"
    );
  }
  chooseUppercase();
};
function chooseUppercase() {
  array = [];
  str = "";
  var chooseUppercase = confirm("Would you like to use Uppercase characters?");
  if (chooseUppercase == true) {
    confirmLength = prompt(
      "How many Uppercase characters would you like to use?"
    );
    console.log(confirmLength);
    for (var i = 0; i < confirmLength; i++) {
      finalArray.push(uppercase[Math.floor(Math.random() * 26)]);
      str += uppercase[Math.floor(Math.random() * 26)];
    }
  }
  chooseLowercase();
}
function chooseLowercase() {
  array = [];
  str = "";
  var chooseLowercase = confirm("Would you like to use Lowercase characters?");
  if (chooseLowercase == true) {
    confirmLength = prompt("How many Lowercase characters would you like?");
    console.log(confirmLength);
    for (var i = 0; i < confirmLength; i++) {
      finalArray.push(lowercase[Math.floor(Math.random() * 26)]);
      str += lowercase[Math.floor(Math.random() * 26)];
    }
  }
  chooseNumbers();
}
// console.log(finalArray);
// chooseLowercase();

function chooseNumbers() {
  array = [];
  str = "";
  var chooseNumbers = confirm("Would you like to use Numeric characters?");
  if (chooseNumbers == true) {
    confirmLength = prompt(
      "How many Numeric characters would you like to use?"
    );
    console.log(confirmLength);
    for (var i = 0; i < confirmLength; i++) {
      finalArray.push(numbers[Math.floor(Math.random() * 10)]);
      str += numbers[Math.floor(Math.random() * 10)];
    }
  }
  chooseSpecial();
}
function chooseSpecial() {
  array = [];
  str = "";
  var chooseSpecial = confirm("Would you like to use Special characters?");
  if (chooseSpecial == true) {
    passLength = prompt("How many Special characters would you like to use?");
    console.log(passLength);
    for (var i = 0; i < passLength; i++) {
      finalArray.push(specials[Math.floor(Math.random() * 14)]);
      str += specials[Math.floor(Math.random() * 14)];
    }
    alert(
      'Click the "Generate a Password" button below to receive your password!'
    );
  }
  return finalArray;
}
console.log(finalArray);
// function to generate a random numeric value
// var randomNumber = function (min, max) {
//   var value = Math.floor(Math.random() * (max - min + 1) + min);

console.log(finalArray);
console.log(writePassword);
console.log(passLength);
// Write password to the #password input
function writePassword() {
  //   alert("You pressed the button");

  console.log(finalArray);
  passwordTextEl = shuffle(finalArray).join(" ");
  //   console.log(passwordTextEl);
  function shuffle(finalArray) {
    var passwordIndex = finalArray.length,
      passwordValue,
      randomIndex;
    while (0 !== passwordIndex) {
      randomIndex = Math.floor(Math.random() * passwordIndex);
      passwordIndex -= 1;

      passwordValue = finalArray[passwordIndex];
      finalArray[passwordIndex] = finalArray[randomIndex];
      finalArray[randomIndex] = passwordValue;
    }
    console.log(finalArray);
    return finalArray;
  }
  //   var password = generatePassword();
  //   var passwordText = document.querySelector("#password");
  //   return value;
  //   passwordText.value = password;
}
// var passwordTextEl = finalArray.join();
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var passLength = finalArray.join;
console.log(passLength);

document.getElementById("generate").addEventListener("click", function () {
  document.getElementById("password").innerHTML = passwordTextEl;
  document.querySelector("#password").style.backgroundColor = "#f4f4f4";

  //   return password;
});
confirmLength();

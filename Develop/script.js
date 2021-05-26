// Assignment Code
var generatePassword = "";
let finalArray = [];
var selectPassword = true;
var passwordLength = "";
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var passNumber = Math.floor(Math.random() * 10);

// console.log(passNumber);
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
console.log();
console.log();

var confirmLength = function () {
  var passLength = prompt(
    "A good password is between 8 - 128 characters. How many characters would you like to use in your password?"
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
};
function chooseUppercase() {
  array = [];
  str = "";
  var chooseUppercase = confirm("Would you like to use Uppercase characters?");
  if (chooseUppercase == true) {
    confirmLength = prompt("How many uppercase letters would you like");
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
  var chooseLowercase = confirm("Would you like to use lowercase characters?");
  if (chooseLowercase == true) {
    confirmLength = prompt("How many lower case letters would you like");
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
  var chooseNumbers = confirm("Would you like to use numbers?");
  if (chooseNumbers == true) {
    confirmLength = prompt("How many uppercase letters would you like");
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
  var chooseSpecial = confirm("Would you like to use special characters?");
  if (chooseSpecial == true) {
    passLength = prompt("How many special letters would you like");
    console.log(passLength);
    for (var i = 0; i < passLength; i++) {
      finalArray.push(specials[Math.floor(Math.random() * 14)]);
      str += specials[Math.floor(Math.random() * 14)];
    }
  }
  return finalArray;
}
console.log(finalArray);
// function to generate a random numeric value
// var randomNumber = function (min, max) {
//   var value = Math.floor(Math.random() * (max - min + 1) + min);

//   return value;
confirmLength();

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
  return finalArray;
}
shuffle(finalArray);
console.log(finalArray);

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// document.getElementById("generate").addEventListener("click", function () {
//   document.getElementById("password").innerHTML = finalArray;
// });

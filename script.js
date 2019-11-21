// defining variables, data sets needed.

var symbols = "!@#$%^&*()_+-";
var numbers = "1234567890";
var alphabetlower = "abcdefghijklmnopqrstuvwxyz";
var alphabetupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var length = document.getElementById("length");

// defining references to the DOM.
var pwdLength = document.getElementById("pwdLength");
var symBox = document.getElementById("symBoxCheck");
var lowerBox = document.getElementById("lowercaseCheck");
var upperBox = document.getElementById("uppercaseCheck");
var submitBtn = document.getElementById("submit");
var passwordDisplay = document.getElementById("displaypwd");
var numBox = document.getElementById("numBoxCheck");

//checking if variables work
// console.log(
//   symBox.checked,
//   lowerBox.checked,
//   upperBox.checked,
//   numBox.checked,
//   submit,
//   displaypwd
// );

submitBtn.addEventListener("click", function(e) {
  console.log(e);
  let options = [];
  let length = pwdLength.value;

  if (
    !numBox.checked &&
    !symBox.checked &&
    !lowerBox.checked &&
    !upperBox.checked
  ) {
    alert("PLEASE SELECT AN OPTION");
  } else {
    if (numBox.checked) {
      //if numbox is checked do...
      options.push(numbers);
    }
    if (symBox.checked) {
      //if symbox is checked do..
      options.push(symbols);
    }
    if (lowerBox.checked) {
      // if lowerBox is checked do
      options.push(alphabetlower);
    }
    if (upperBox.checked) {
      // if upperbox is checked do
      options.push(alphabetupper);
    }
    // console.log(passwordDisplay);
    passwordDisplay.innerText = generatepwd(length, options);
  }
});

function generatepwd(length, options) {
  // console.log(length, options);
  let modifiers = options.join("");
  let password = "";
  for (let i = 1; i <= length; i++) {
    password += modifiers[randIndex(modifiers)];
  }
  return password;
}

function randIndex(modifiers) {
  return Math.floor(Math.random() * modifiers.length);
}

// console.log("RAND INDEX", randIndex("abc"));

var symbols = "!@#$%^&*()_+-";
var numbers = "1234567890";
var characters = "abcdefghijklmnopqrstuvwxyz";
var alphabetupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var numbox = document.getElementById("numbox");
var symbox = document.getElementById("symbox");
var upperbox = document.getElementById("upperbox");
var submit = document.getElementById("submit");
var pwdbox = document.getElementById("displaypwd");

console.log(generatepwd(50, characters));

function generatepwd(length, characters) {
  var pwdgen = "";
  for (var i = 0; i < length; i++) {
    pwdgen += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return pwdgen;
}

const inputBox = document.getElementById("inputBox");
const passwordLength = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXZY";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "@#$%^&*+!|[]?<>_~-";
const allCharacters = upperCase + lowerCase + numbers + symbols;
// let copyAlert = document.getElementById("copy");
console.log(allCharacters);

function generatePassword() {
  let password = "";

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (passwordLength > password.length) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
  inputBox.value = password;
  copyAlert.classList.remove("show");
}

function copyPassword() {
  inputBox.select();
  document.execCommand("copy");
  if (inputBox.value === "") {
    copyAlert.classList.remove("show");
  } else {
    copyAlert.classList.add("show");
    console.log("reach");
  }
  inputBox.value = "";
}

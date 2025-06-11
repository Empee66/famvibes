// // const passwordField = document.getElementById("password");
// // const lengthDisplay = document.getElementById("length");
// // const generateBtn = document.getElementById("generateBtn");
// // const copyBtn = document.getElementById("copyBtn");
// // const lengthInput = document.getElementById("lengthInput"); // Assuming this exists

// // const originalCopyText = copyBtn.textContent; // Store original copy button text/icon

// // function generatePassword(length = 12) {
// //   const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}";
// //   let password = "";
// //   for (let i = 0; i < length; i++) {
// //     const random = Math.floor(Math.random() * chars.length);
// //     password += chars[random];
// //   }
// //   return password;
// // }

// // function updatePassword() {
// //   let length = parseInt(lengthInput.value, 10);
// //   if (isNaN(length) || length < 4 || length > 64) {
// //     alert("Please enter a length between 4 and 64.");
// //     return;
// //   }

// //   const newPassword = generatePassword(length);
// //   passwordField.value = newPassword;
// //   lengthDisplay.textContent = newPassword.length;
// // }

// // generateBtn.addEventListener("click", updatePassword);

// // copyBtn.addEventListener("click", () => {
// //   const password = passwordField.value;
// //   if (!password) return;

// //   navigator.clipboard.writeText(password)
// //     .then(() => {
// //       copyBtn.textContent = "Password Copied";
// //       setTimeout(() => {
// //         copyBtn.textContent = "📋";
// //         setTimeout(() => {
          
// //         }, 1000);
// //       }, 1500);
// //     })
// //     .catch(() => {
// //       alert("Failed to copy password.");
// //     });
// // });

// // // Generate a password on page load
// // updatePassword();
  let  firstCard = 6
  
  let secondCard = 15
  let sum = firstCard + secondCard
  console.log(sum)




  if (sum < 21 ) {
    console.log("do you wnat to draw a new card?")
  }else if ( sum===21){
    console.log("wohoo! BlackJack!")
  } else  {
    console.log("you're out of the game!")
  }
// let age = 100
// if (age< 100){
//   console.log("Not Elegible!")
// }else if (age===100){
//   console.log("Here is your birthday card from the King!")
// }else{
//   console.log("Not Elegible, You have already gotten one")
// }
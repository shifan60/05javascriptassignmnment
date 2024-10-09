// let text=" I'am Muhammed shifan";
 // console.log(text.replace("I'am","Hi"));

 let userName = prompt("Enter Your Name:")
let FirstLetter=userName.slice(0,1).toUpperCase()
let restOftheLetters=userName.slice(1,userName.length).toLowerCase()
let nameToDisplay=FirstLetter+restOftheLetters
alert(`hey ${nameToDisplay}`)
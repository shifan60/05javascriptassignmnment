 JavaScript Assignment 5

1. Write short notes on string methods with code examples

- toLowerCase()

The toLowerCase() method converts a string to lowercase letters. The toLowerCase() method does not change the original string.

```js
 let str="JAVASCRIPT"
   console.log(str.toLowerCase())
```
output : javascript

- toUpperCase()

The toUpperCase() method converts a string to uppercase letters. The toUpperCase() method does not change the original string.

```js
 let str="javascript"
  console.log(str.toUpperCase())
```
output : JAVASCRIPT

- substring()

```js
The substring() method extracts characters from start to end (exclusive). The substring() method does not change the original string.

 let description="Ashique"
  console.log(description.substring(0,5))
  ```
output : Ashiq

- replace()

```js
The replace() method searches a string for a value or a regular expression. The replace() method returns a new string with the value(s) replaced.

let text=" I'am Muhammed shifan";
 console.log(text.replace("I'am","Hi"));
 ```
output :Hi muhammed shifan

- trim()

The trim() method removes whitespace from both sides of a string. The trim() method does not change the original string.

```js
let text="          set of characters enclosed in a single quotes";
 console.log(text.trim());
 ```
output : set of characters enclosed in a single quotes

- split()

The split() method splits a string into an array of substrings. The split() method returns the new array.

```js
let text="wonderfull";
 console.log(text.split(""));
 ```
output : 'w', 'o', 'n', 'd', 'e', 'r', 'f', 'u', 'l' ,'l'

- slice()

The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end.

```js
 const fruits=["banana","orange","apple","lemon","mango"];
 console.log(fruits.slice(1,3));
 ```
output : ['orange','apple']


2. create a simple app that takes the user’s name and greets him/her after capitalizing the first letter of the user’s name and changing the rest of the letters into lowercase (toUpperCase(), toLowerCase(), slice(), length property, string concatenation)

```js
let userName=prompt("Enter Your Name:")
let FirstLetter=userName.slice(0,1).toUpperCase()
let restOftheLetters=userName.slice(1,userName.length).toLowerCase()
let nameToDisplay=FirstLetter+restOftheLetters
alert(`hey ${nameToDisplay}`)
```
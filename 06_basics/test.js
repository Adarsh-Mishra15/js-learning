// console.log("Hi Adarsh")

// Strings in javascript

const name = "Adarsh"

const repoCount = 10

//console.log(name + repoCount + "value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount} `)

const gameName = new String('Adars-h')
    // console.log(typeof gameName) // object

// console.log(gameName[0])
// console.log(gameName.__proto__) // to know all the methods in string

// console.log(gameName.length)
// console.log(gameName.toUpperCase()) // original value not change because of using stack
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('r'));

// substring

const newString = gameName.substring(0, 5) // from index 0 to 4
    // console.log(newString);

// slice

//const anotherString = gameName.slice(0, 4)
const anotherString = gameName.slice(-6, -1)
    // console.log(anotherString);

// trim(remove spaces) and replace

const newStringOne = "  Adarsh  "
    // console.log(newStringOne)
    // console.log(newStringOne.trim())

const url = "https://adarsh.com/adarsh%20mishra"


// console.log(url.replace('%20', '-'));

// console.log(url.includes('adarsh')) // true because url contains name adarsh

// console.log(gameName.split('-')) // split by the character '-' into two separate string in an array

// Number

const score = 400
    // console.log(score); // 400
    // console.log(`${score} is a number`);
const balance = new Number(100)
    // console.log(balance); // [Number: 100]

// console.log(balance.toString().length);
// precision
// console.log(balance.toFixed(2)); // 100.00

// learn how precision actually works
const otherNumber = 1123.89646
    // console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
    // console.log(hundreds.toLocaleString('en-IN')); // comma separation to understand easily


// **************** Maths ***********

console.log(Math)

console.log(Math.abs(-4));
console.log(Math.round(4.43));
console.log(Math.ceil(4.1));
console.log(Math.min(10, 20, 12, 14));
console.log(Math.floor(Math.random() * 10) + 1); // 1 to 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // not contains zero therefore add 1
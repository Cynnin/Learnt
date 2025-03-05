//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
const firstName = 'Ruffy';
const lastName = 'Chindu';
const age = 21;
const country = 'Nigeria';
const city = 'Lagos';
const isMarried = false;
const year = 2025;

console.log(typeof firstName); // string
console.log(typeof lastName); // string
console.log(typeof age); // number
console.log(typeof country); // string
console.log(typeof city); // string
console.log(typeof isMarried); // boolean
console.log(typeof year); // number

//Check if type of '10' is equal to 10
//Check if parseInt('9.8') is equal to 10
console.log(typeof '10' === typeof 10); // false
console.log(parseInt('9.8') === 10); // false

//Write three JavaScript statements which provide truthy value.
console.log(country === 'Nigeria'); // true
console.log(age > 20); // true
console.log(city === 'Lagos'); // true

//Write three JavaScript statements which provide falsy value.
console.log(isMarried === true); // false
console.log(age < 20); // false
console.log(city === 'Abuja'); // false

// Figure out the result of the following expressions first without using console.log().
// After you decide the result confirm it by using console.log()
console.log(4>3&&10<12); // true
console.log(4>3&&10>12); // false
console.log(4>3||10<12); // true
console.log(4>3||10>12); // true
console.log(!(4>3)); // false
console.log(!(4<3)); // true
console.log(!(false)); // true
console.log(!(4>3&&10<12)); // false
console.log(!(4>3&&10>12)); // true
console.log(!(4=== '4')); // true

// Write a script that prompts the user to enter base and write another prompt for height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
//let base = parseFloat(prompt('Enter the base of the triangle')); // parseFloat converts the string to a number for base
//let height = parseFloat(prompt('Enter the height of the triangle')); // parseFloat converts the string to a number for height

//if (isNaN(base) || isNaN(height)) {
   // console.log('Invalid input. Please enter numeric values for base and height.');
//} else {
    //let area = 0.5 * base * height; // calculate the area of the triangle
   // console.log(`The area of the triangle is ${area}`); // display the result
//}//commented out//

//Using prompt, get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
const birthYear = prompt('Enter the year you were born');
const userAge = 2021 - birthYear;
if (userAge >= 18) {
    console.log('Yay! You are old enough to drive');
} else {
    console.log(`Too bad! You will be able to drive in ${18 - userAge} years`);
}
console.log(`You are ${userAge} years old`);

//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript’
let challenge = '30 Days Of JavaScript';
console.log(challenge);
//Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());
//Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());
//Cut (slice) out the first word of the string using slice()
console.log(challenge.slice(0, challenge.indexOf(' ')));
//Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'));
//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'));
//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'));
//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));
//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30'));
//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('JavaScript'));

//Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random() * 101));
//Declare variables named a & b, assign them to numbers. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
//using if else
let a = 4;
let b = 3;
if (a > b) {
    console.log('a is greater than b');
} else {
    console.log('a is less than b');
}
//using ternary operator
console.log(a > b ? 'a is greater than b' : 'a is less than b');

// Declare a variable named scores, Write a code which can give grades to students according to theirs scores and log it to the console:
//80-100, A
//70-89, B
//60-69, C
//50-59, D
//0-49, F
let scores = 70;
if (scores >= 80 && scores <= 100) {
    console.log('A');
} else if (scores >= 70 && scores < 80) {
    console.log('B');
} else if (scores >= 60 && scores < 70) {
    console.log('C');
} else if (scores >= 50 && scores < 60) {
    console.log('D');
} else if (scores >= 0 && scores < 50) {
    console.log('F');
}
console.log(scores);

//N.B When you have multiple prompts in one file, comment most of them and leave only the one you want to test uncommented. 

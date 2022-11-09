"use strict"

/* Author Name : Mahaling Patil
   Date : November 9 2022 */

// Assignment 1 : Write a program to find whether a given year is a leap year or not

// Declare a variable which of type integer

let intYear = 1992

if (String(intYear).endsWith("00")===true && intYear % 400 === 0)
    console.log(`the given year ${intYear} is a leap year`)
else if (String(intYear).endsWith("00")!=true && intYear % 4 === 0) 
    console.log(`the given year ${intYear} is a leap year`)
else 
    console.log(`the given year ${intYear} is not a leap year`)


/* Assignment 2 : Write a JavaScript program to convert temperatures to and from Celsius,
Fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C
*/

// Convert temperature from Celsius to Fahrenheit 
let c = 60
let f = (c*9/5)+32
console.log(`${c} C is ${f} F`);

//Convert temperature from Fahrenheit to Celsius

let f1 = 45
let c1 = ((45-32)/9)*5
console.log(`${f1} F is ${c1} C`);


// Assignment 3 : Write a program to find the factorial of a number

let inputNumber = 5
let factNumber = 1

while (inputNumber>=1){
    factNumber = factNumber*inputNumber
    inputNumber=inputNumber-1
}

console.log(factNumber);
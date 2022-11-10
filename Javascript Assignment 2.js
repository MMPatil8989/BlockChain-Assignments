"use strict"

/* Assignment 1 : Write a Javascript function to check whether a triangle is equilateral,
isosceles or scalene */

// Declare 3 sides of triangle

let side1 = 30
let side2 = 20
let side3 = 31

function CheckTriange(x,y,z){
    if (side1===side2 && side1===side3 && side2 ===side3)
        console.log("triangle is equilateral");
    else if (side1 === side2 || side1 === side3 || side2 === side3)
        console.log("triangle is isosceles");
    else
        console.log("triangle is scalene");
}

CheckTriange(side1,side2,side3)

/* Assignment 2 : Write a function using switch case to find the grade of a student based
on marks obtained
a. “S grade” if the marks are between 90 and 100.
b. “A grade” if the marks are between 80 and 90.
c. “B grade” if the marks are between 70 and 80.
d. “C grade” if the marks are between 60 and 70.
e. “D grade” if the marks are between 50 and 60.
f. “E grade” if the marks are between 40 and 50.
g. “Student has failed” if the marks are between 0 and 40.
h. Else output “Invalid marks”. */

// declare Min and Max marks

let MinMarks = 90
let MaxMarks = 95

function FindStudentGrade(m1,m2){
   switch(true){
    case m1 >=90 && m2 <= 100:
        console.log("S Grade");
        break;
    case m1>=80 && m2<90 :
        console.log("A grade");
        break;
    case m1>=70 && m2<80 :
        console.log("B grade");
        break;
    case m1>=60 && m2<70 :
        console.log("C grade");
        break;
    case m1>=50 && m2<60 :
        console.log("D grade");
        break;
    case m1>40 && m2<50 :
        console.log("E grade");
        break;
    default:
        console.log("Failed");
   }

}

FindStudentGrade(MinMarks,MaxMarks)

/* Assignment 3 : Write a JavaScript program to find the sum of the multiples of 3 and 5
under 1000 */

// declare a number

let n1 = 999
let totalSum = 0
function findMultiples(x){
    while (x>3 && x>5){
        if (x % 3 === 0 && x % 5 === 0){
            totalSum =totalSum+x
        }
        x--
    }
    return totalSum
}


let result = findMultiples(n1)
console.log(result);


/* Assignment 4 : Write a program to find the factorial of all prime numbers between a
given range . Range will be passed as 2 values in the function
parameters. eg- if it is needed to find the values for numbers 1-100, then
function declaration can look like - function prime(1,100) */

// declare 2 numbers

let rang1 = 2;
let range2 = 50;

function FindFactorialOfPrimeNumbers(x,y){
    while (x <= y){
        let z = 2;
        let isPrime = true
        while(z < x){
            if (x % z === 0){
                isPrime = false
                break;
            }
            z++
        }
        let fact = 1
        if (isPrime === true && x>=2){
          while (z>=2){
            fact = fact*z
            z--
          }
          console.log(`factorial of a prime number ${x} is ${fact}`);
        }
        
        x++
    }
}

FindFactorialOfPrimeNumbers(rang1,range2)
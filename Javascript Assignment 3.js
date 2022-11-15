"use strict"

/* Assignment 1 : 1. Using for loops, write a Javascript program to output the following
pattern -
1
2 3
4 5 6
7 8 9 10
*/

let i = 1;
let j =1;
let k = 1
let l = " 1"

for (i =1;i<5;i++)
{
    for(j=i;j>=1;j--)
    {
        if (i!=1){
            l = l+" "+ k
        }
        k++
    }
    console.log(l);
    l=""
}

/* Assignment 2 : Write a program to find whether a given number is armstrong number or
notThe Armstrong number is a number that is equal to the sum of cubes of
its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
numbers. Let's try to understand why 153 is an Armstrong number.
153 = (1*1*1)+(5*5*5)+(3*3*3) where:
(1*1*1)=1
(5*5*5)=125
(3*3*3)=27
So:
1+125+27=153
*/


let num1 = "153"
let res;
for (let i = 0 ; i < num1.length;i++){
    if (i===0){
        res = num1.charAt(i) * num1.charAt(i) * num1.charAt(i)
    }
    else
    {
        res = (num1.charAt(i) * num1.charAt(i) * num1.charAt(i)) + res
    }
}

if (num1 === String(res))
    console.log(`the given number ${num1} is a armstrong number`);
else
    console.log(`the given number ${num1} is not a armstrong number`);


/* Assignment 3 : Write a program to find whether a given number is special number or
notIf the sum of the factorial of digits of a number (N) is equal to the
number itself, the number (N) is called a special number.
eg- 145 is a special number
Logic- 1! + 4! + 5!= 1+24+120 i.e 14
 */


let num2 = "145";
let tempvalue = 1;
let res2 = 0;
for (let i=0 ; i<num2.length;i++)
{
    for (let j=1 ; j<= num2.charAt(i);j++)
    {
        tempvalue = tempvalue*j
    }
    res2 = res2 + tempvalue
    tempvalue = 1
}

if (num2 === String(res2))
    console.log(`the given number ${num2} is a special number`);
else
    console.log(`the given number ${num2} is not a special number`);
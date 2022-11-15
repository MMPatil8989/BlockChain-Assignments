"use strict"


/* Javascript Assignment 4 :

   This assignment will help you interpret mathematical relationships both
algebraically and geometrically.
Create a function that takes a number (step) as an argument and returns the
number of matchsticks in that step. See step 1, 2 and 3 in the image above.
Take input from the user in the function parameter and return the output
using the return statement.

examplesmatchHouses(1) ➞ 6
matchHouses(4) ➞ 21
matchHouses(87) ➞ 436
*/

let output = 0
function matchHousesCount(step)
{
    while (step>=1)
    {
        if (step===1)
            output = output+6
        else
            output = output+5
    step--
    }
    return output;
}

// initializing step number as 87
let step =87
let res = matchHousesCount(step)
console.log(res);


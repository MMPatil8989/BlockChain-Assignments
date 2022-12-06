"use strict"

/* Assignment 1 :
Perform the following operations to provide the implementation for a
Rectangle class. The operations are:
1. Add an area() method to the Rectangle class.
2. Create a Square class that satisfies the following conditions:
○ It is a subclass of Rectangle.
○ It contains a constructor and no other methods.
○ It can use the Rectangle class' area method to print the area
of a Square object.
*/

class Rectangle
{
    constructor(a)
    {
        this.area = a;
    }
    areaOfSquare()
    {
        let areaOfSqr = this.area*this.area
        console.log("Area of a square is : "+areaOfSqr);
    }
}

class Square extends Rectangle
{
   constructor(a)
   {
     super(a)
   }
}

let sqr = new Square(5)
sqr.areaOfSquare()


/* Assignment 2 : 
 Write a javascript function find_largest to return the nth largest number
in an arrayeg- given an array of integers- [3,45,6,7,23,5,7,8]
find_largest(3) will return third largest number from the above array -
which is 8.*/

let arrItems = [3,45,6,7,23,5,7,8]  // [3,5,6,7,8,23,45]
let index = 3

let sortedItems = arrItems.sort(function(a,b){return a-b})

for (let i =0;i<sortedItems.length;i++)
{
    if (arrItems[index] === sortedItems[i])
        {
            console.log(sortedItems[i+index]);
            break
        }
}

/* Assignment 3 : 
 Write a JavaScript program which accept a number as input in the
function parameter and insert dashes (-) between each two even
numbers.
For example if you accept 025468 as the output should be 0-254-6-8.
computeDash(025468) -> 0-254-6-8*/

function InsertDash(num)
{
    let res = "";
    for (let i = 0 ; i < num.length;i++)
    {
        if (parseInt(num.charAt(i))% 2 === 0 && parseInt(num.charAt(i+1))% 2 ===0)
        {        
            if (i===0)
            {
             res=num.charAt(i)+"-"
            }
            else
            {
                res=res+""+num.charAt(i)+"-"
            }        
        }
        else
        {
            res = res+""+num.charAt(i)
        }
    }
    return res
}

console.log(InsertDash("025468"));
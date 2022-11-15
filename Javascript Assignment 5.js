"use strict"

/*
1) Write a JavaScript program to get the volume of a Cylinder, Sphere and
Cone with four decimal places using objects and classes.
Create classes for volumes for each geometric shape which returns the
output using the getVolume() method.
eg- to get volume of cylinderlet obj= new Cylinder(radius,height);
obj.getVolume();
Formulas for volumes of the shapes1) Cylinder- Volume = πr
2h
where r is the radius and h is the height of the cylinder.
2)Sphere- Volume= 4/3π𝑟
3
where r is the radius
3) Cone- Volume= πr
2h/3
where r is the radius and h is the height of the cone*/


// To get the volume of a Cylinder

class cylinder
{
    constructor (pivalue,radious,height)
    {
        this.pivalue = pivalue
        this.rad = radious
        this.hgt = height
    }
    getVolume()
        {
            let res = this.pivalue*(this.rad*this.rad)*this.hgt
            console.log(`The volume of the cylinder is : ${res}`);
        }
}

let c1 = new cylinder(3.142,2,4)
c1.getVolume()

// To get the volume of a Sphere

class Sphere
{
    constructor (pivalue,radious)
    {
        this.pivalue = pivalue
        this.rad = radious
    }
    getVolume()
        {
            let res = (4/3)*this.pivalue*(this.rad*this.rad*this.rad)
            console.log(`The volume of the Sphere is : ${res}`);
        }
}

let s1 = new Sphere(3.142,1)
s1.getVolume()

// To get the volume of a Cone

class Cone
{
    constructor (pivalue,radious,height)
    {
        this.pivalue = pivalue
        this.rad = radious
        this.hgt = height
    }
    getVolume()
        {
            let res = this.pivalue*(this.rad*this.rad)*(this.hgt/3)
            console.log(`The volume of the Cone is : ${res}`);
        }
}

let cn = new Cone(3.142,1,2)
cn.getVolume()
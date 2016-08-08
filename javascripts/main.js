"use strict";
// Main js

// Pseudo code (written in plain english) syntax for JS

// Objects
// Key to value pair.
// { key: value }
// With multiple properties
// {
//    property1: value1,
//    property2: value2
// }

// Values can be different types of
//   data
// Strings look like: "this"
// They are surrounded by quotes.

// Numbers look like: 0
// They are just numbers

// Objects can also be values
// { property1: {} }
// This is for more complex data.

// Arrays inside of Objects
// { array1: [] }

// Objects in arrays
// [ {}, {} ]

// Arrays look like: [ ];
// [value1, value2, value3]
// THEY DO NOT HAVE "DOT" SYNTAX
// arrayName[0] == index of the first value
// arrayName[1] == index of the second value

// Booleans look like: true... or false
// { propertyBoolean: false }

// Falsy: null, false, "", undefined, NaN (not a number)

// Variables hold data for later.
// They look like: var name = "jason";

// Syntax for a statement...
// Always end your lines with `;`

// Object manipulation... or getting data
// from objects...
// Dot syntax: `objectName.propertyName`

// EXAMPLES:

var name = "jason";

// debugging technique
// console logs will show us variables if
// need be
console.log(name);

// Storing the year as a number variable
var year = 2016;
console.log(year);

// Storing address with name in object
var addressObject = {
  number: 310,
  name: "East Grayson"
};
console.log(addressObject.name);

// Storing all addresses around me
var arrayOfAddresses = [310, 401, 550, 600];
console.log( arrayOfAddresses[2] );


// Storing everyones name in the class
// In an array "literal"
var arrayOfClass = ["Max", "Gilbert", "Lauren", "Adam", "Ernesto"];
console.log(arrayOfClass[4], arrayOfClass[2]);

var arrayOfFaculty = ["Hanh", "Robin", "Jason"];
console.log(arrayOfFaculty[2], arrayOfFaculty[0], arrayOfFaculty[1]);

var classroomObject = {
  whiteboard: true,
  projector: false,
  seats: 8,
  students: ["Max", "Gilbert", "Lauren", "Adam", "Ernesto"],
  name: "Blue Star"
};

var pythonClassroomObject = {
  instructor: "Robin"
};

console.log(classroomObject);

// To change data in an object... we use...
// Dot syntax AND THEN `=`

// Change projector boolean to `true`
// Through reassignment
console.log(classroomObject.projector);
classroomObject.projector = true;
console.log(classroomObject.projector);

var amountOfTacosIWillEatAtLunch = "200";
var amountOfTacosICanActuallyEat = "3";

var amountOfLeftOverTacos = amountOfTacosIWillEatAtLunch - amountOfTacosICanActuallyEat;

console.log(amountOfLeftOverTacos);

// This causes concatenation "adding of
// strings"
var amountOfFEEStudents = 4;
var amountOfBEEStudents = 2;
console.log(amountOfFEEStudents + amountOfBEEStudents + " Students in both classes. The FEE students are in the " + classroomObject.name + " room");

// Store day names of the week
// "Monday" "Tuesday" ... etc
// "assign" or `=` or "reassign"
var dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

var dayObject = { names: ["tuesday", "monday"] };

var name = "jason"
console.log(name);

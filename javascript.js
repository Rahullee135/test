// JavaScript can "display" data in different ways:

// Writing into an HTML element, using innerHTML.
// Writing into the HTML output using document.write().
// Writing into an alert box, using window.alert().
//for printing page window.print()
// Writing into the browser console, using console.log().

/*
keywords 
The let keyword tells the browser to create variables
The var keyword also tells the browser to create variables:
*/

/*
There are 3 ways to declare a JavaScript variable:

Using var
Using let
Using const
*/

// declaring a variable 

var carName
carName="Volvo"
var carName="Volvo"

console.log(carName)

// You can also add strings, but strings will be concatenated:
// example :

// If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
var x = "5"+2+3

// if u need to add numbers with string do like this 

var y = 2+3+"5"

console.log(x)
console.log(y)



// for let
/*
The let keyword was introduced in ES6 (2015).

Variables defined with let cannot be Redeclared.

Variables defined with let must be Declared before use.

Variables defined with let have Block Scope.
*/

// let and var difference is 
// once u declared using let and u cannot redeclared if u declared it will give u syntax error

// let z = "rahul"
// let z = 0

// console.log(z) //Uncaught SyntaxError: Identifier 'z' has already been declared

// var difference is 
// once u declared using var and u can redeclared 

var a = "rahul"
var a = 0

console.log(a) // but with var u can redeclare a variable

/*
Block Scope
Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

ES6 introduced two important new JavaScript keywords: let and const.

These two keywords provide Block Scope in JavaScript.

Variables declared inside a { } block cannot be accessed from outside the block:

let can be used inside of the code cannot accessed by outside

var can be used outside it can be accessable can not have block scope
*/

//for let Redeclaring a variable inside a block will not redeclare the variable outside the block
//it will take the first declare as output for let keyword 



// for const

/*
The const keyword was introduced in ES6 (2015).

Variables defined with const cannot be Redeclared.

Variables defined with const cannot be Reassigned.

Variables defined with const have Block Scope.

***** important for const ******
Must be Assigned
JavaScript const variables must be assigned a value when they are declared:

When to use JavaScript const?
As a general rule, always declare a variable with const unless you know that the value will change.

Use const when you declare:

A new Array
A new Object
A new Function
A new RegExp

*/


// *** important ****
// JavaScript Assignment Operators 

// operator 

 // x = y --> x = y

 // x += y --> x = x + y

 // x -= y --> x= x - y

 //The += assignment operator can also be used to add (concatenate) strings:


let text1 = "What a very ";
text1 += "nice day";

//(or)


let text2 = "What a very ";
text2 = text2 + "nice man"

console.log(text1)

console.log (text2)

//typeof operator to check what kind of operator  javascript types...

//typeof"" (or) typeof(3+4)

//without variablie is undefined also 

// car = undefined; //// value is undefined type is undefined

//escape character
//let text = "We are the so-called \"Vikings\" from the north.";
//let text= 'It\'s alright.';
//let text = "The character \\ is called backslash.";

/*
Extracting String Parts
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)
*/

let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

console.log(newText)

//By default, the replace() method replaces only the first match:
// ex: 
//let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");


//By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:





//string.search()


let str = "please locate where 'lOCAte' occurs!"
console.log(str.search("locate"))

//search method cannot take second arguments


//string.match()
console.log(str.match(/oca/g))
//g-->global for small letters


//i-->insensitive for capital letters
console.log(str.match(/oca/gi))

//string.includes()
console.log(str.includes("where"))

let text3 = "Hello world, welcome to the universe";
console.log(text3.includes("world",12))


//string.startsWith()
console.log(text3.startsWith("Hello"))

console.log(text3.startsWith("world",5))

console.log(text3.startsWith("world",6))

//string.endsWith()

console.log(text3.endsWith("universe"))

console.log(text3.endsWith("world",11))

//template allows multiple stringline (` hi etc.... `)
//also templates allows expression in string 
//example:

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

console.log(total)


//**important***

//Or even worse. Objects cannot be compared:




//The toString() Method



let h = 123
console.log(h.toString()); // variable
console.log((123).toString()); // literal
console.log((100+23).toString()); // expression



//js arrays

//array properties and methods 
//cars.length   // Returns the number of elements
//cars.sort()   // Sorts the array

const points = new Array(40, 100, 1);
const points1 = new Array(40, 100);
// points 2 and 3 are not same cause new array makes 40 empty array but normal array[] makes only one element
const points2 = new Array(40);
const points3 = [40];

console.log(points)
console.log(points1)

console.log(points2)//
console.log(points3)//



//The typeof operator returns object because a JavaScript array is an object.

const fruits1 = ["Banana", "Orange", "Apple"];
console.log(typeof (fruits1));    // returns object

//To solve this problem ECMAScript 5 defines a new method Array.isArray()

console.log(Array.isArray(fruits1))

//The instanceof operator returns true if an object is created by a given constructor:

console.log(fruits1 instanceof Array)


//array iteration
//Array.map()

const number1 = [2,4,6,8,10]
const number2 = number1.map(myFunction)

function myFunction(value,index,array) {
    return value * 2
}

console.log(number2)


//Array.filter()

const number3 = [2,4,6,9,10]
const number4 = number3.filter(myFunction2)


function myFunction2 (value,index,array) {
    return value > 8
}

console.log(number4)

//Array.find()

const number5 = number3.find(myFunction2)

console.log(number5)




// ********** important **************8


//const vs var difference having or not @ block scope

const cars = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{
  const cars = ["Toyota", "Volvo", "BMW"];
  // Here cars[0] is "Toyota"
}
// Here cars[0] is "Saab"

console.log(cars[0])


var cars1 = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{
  var cars1 = ["Toyota", "Volvo", "BMW"];
  // Here cars[0] is "Toyota"
}
// Here cars[0] is "Toyota"
console.log([cars1[0]])


//The JavaScript Switch Statement


let grade ="J";

switch(grade){
    case "S":
    console.log("super grade");
    break;
    case "A":
    case "B":
    console.log("Excellent grade");
    break;
    case "E":
    console.log("just pass grade");
    break;
    case "U":
    console.log("failed grade");
    break;
    default :
    console.log("unkown grade");
    break;
}


/// *** IN SWITCH STATEMENT ORDER IS MUST TO FOLLOW BY NUMBER GREATER THAT OR LESS THAN ****///////



let marks = 60;

switch(true) {

     case marks > 90 :
     console.log("super grade")
     break;
      case marks > 50 :
     console.log("pass ")
     break;
      case marks < 50 :
     console.log("failed")
     break;
     default:
     console.log("unkown grade")
     break;
}


// javascript loops 
let text5 = " ";
for (let k=0;k < 5;k++){
    text5  += "the number is " + "<br>";
}

console.log(text5)

const cars4 = [ "BMW","VOLKSWAGAN","SUZUKI" ];

let i,len,text6;

for(i=0,len = cars4.length,text6 = " ";i<len;i++){
    text6 += cars4[i] + " <br> "
}
console.log(text6)



//Array.forEach()

const number6 = [45,89,76,19,23];

let text7 = "";
number6.forEach(myFunction3)


function myFunction3(value,index,array){
    text7 += value + "<br>";
}

console.log(text7)


//loop for of 

let language = "javascript"
let text8 ="";

for(x of language){
    text8 += x + "<br>";
}

console.log(text8)


//while loop javascript

// let text9= " ";
// let l = 0;
// while(l<10) {
//     text9 += "<br>rahul" + l;
//     i++;
// }

// console.log(text)


//do while loop 

// let text10 =" ";
// let o = 0;
// do {
//     text10 += "rahul" + o;
//     o++
// }

// while(0<10)

//     console.log(text10)



//JavaScript Break and Continue

//Break statement


/// placement of the code is much important in javascript


let q=0;
let text11 = " ";
for (q=0;q<10;q++) {
    if( q === 3 ) {break;}
    text11 += "rahulprasad" + q +  "<br>";
    
}

console.log(text11)


//continue statement


let w=0;
let text12 = " ";
for (w=0;w<10;w++) {
    if( w === 3 ) {continue;}
    text12 += "rahulprasad" + w + "<br>";
    
}


console.log(text12)


///////////////// new Set() method


const hi = new Set(["a","b","c"])

console.log(hi)

console.log(typeof(hi))



///////// new Map() method


const fruits2 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(fruits2)

console.log(typeof(fruits2))

console.log(fruits2.get("apples"))

console.log(fruits2.size)

console.log(fruits2.delete("bananas"))

console.log(fruits2.has("bananas"))





///////////////////***** important *****/////////////////////////////

/*

In JavaScript there are 5 different data types that can contain values:

string
number
boolean
object
function


There are 6 types of objects:

Object
Date
Array
String
Number
Boolean



And 2 data types that cannot contain values:

null
undefined

*/


/*

JavaScript Errors - Throw and Try to Catch:

The try statement lets you test a block of code for errors.

The catch statement lets you handle the error.

The throw statement lets you create custom errors.

The finally statement lets you execute code, after try and catch, regardless of the result.


********* important ********
javascript try and catch how to use it ::::


try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}


*/

//errors will happen

try {
    adddlert("hi rahul")
}
catch(err) {
    console.log(err.message)
}


//// ******** IMPORTANT ******** ////

//ARROW FUNCTION 

//Arrow Functions Return Value by Default:


hello = () => " HELLO WORLD ";

console.log(hello())

//Arrow function with parameter



hello1 = (val) => "hello"+ val ;

console.log(hello1("universe!"))

//Arrow function without parameter

hello2 = val => "hi" + val ;

console.log(hello2("universe@"))

/// ******* important ******** ///

/*

 in arrow function this reperesents the owner of the function

 With a regular function this represents the object that calls the function:

 With an arrow function this represents the owner of the function:

 */


 /// json javascript 


let text13 = 


'{ "employees" : [' +

'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

    const obj = JSON.parse(text13)

    console.log(obj.employees[0].firstName)
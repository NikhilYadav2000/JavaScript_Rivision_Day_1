"use strict" // treat all JS code as newer version
// alert(3+3); // we are using nodejs, not browser

// Datatypes
// 1. Primitive - call by value (copy is sent and all the changes are done in the copy)
let name="Nikhil"
let age="23"
let isLoggedIn=true;
const bigNumber=1233335565n; // putting n means it has become big int now
console.log(bigNumber);
console.log(typeof bigNumber); // bigint

// Number number=2 to the power 53
// bigint
// String=""
// boolean=true/false
// null is a stand alone value but also a datatype
// null means the variable is empty
// undefiend // value has not been assigned yet
// symbol to define uniqueness
console.log(typeof(13)); // number
console.log(typeof(name)); // string
console.log(typeof(null)); // object(datatype)
console.log(typeof(undefined)); // undefined(dataype)

console.log("");
const id = '13';
const anotherId='13'; 
console.log(id===anotherId); // true

console.log("");
const id2 = Symbol('13');
const anotherId2=Symbol('13'); 
console.log(id2===anotherId2); // true

// js is dynamically typed language bcoz datatype woll autimatically be assigned at the time of compilation or code execution 

// 2. Non-Primitive (Reference)
// Object, Array, Function
console.log("");
const heroes=["A","B","C"];
console.log(heroes); // [ 'A', 'B', 'C' ]
console.log(typeof heroes); // object
console.log(""); 
let myObj={
    nm:"Nikhil",
    age:22,
}
console.log(myObj); // { nm: 'Nikhil', age: 22 }
console.log(typeof myObj); // object
console.log("");

const myFunction=function(){
    console.log("Hello World");
}
myFunction(); // Hello World
console.log(typeof myFunction); // function - but it means function object
console.log("");
// Every non-primitve dataype have the datatype as object type only (function has function object).

const a=null;
console.log(a);
console.log(typeof a); // object as the value inside it is null

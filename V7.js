// String interpolation
const name="Nikhil"
const age=23
console.log(`Hello my name is ${name.toUpperCase()} and my age is ${age}`);
console.log(name[0]); // N
const name2 = new String("Tanya")
console.log(name2); // [String: 'Tanya']
console.log(name2[3]); // y
console.log(name2.__proto__); // {} 
// string is an object
console.log(name2.length) // 5
console.log(name2.toUpperCase()) // TANYA
// OG string was not changed as wew get a copy of the variable

console.log(name2.charAt(2)); // n
console.log(name2.indexOf('y')); // 3

const name3 = name2.substring(0,2);
console.log(name3); // Ta

const name4 = name2.slice(0,2);
console.log(name3); // Ta

console.log(name2); // [String: 'Tanya']
const name5 = name2.slice(-3,1);
console.log(name5); 

const name6 = "    Nikhil    ";
console.log(name6); //     Nikhil
console.log(name6.trim()); // Nikhil

console.log(name6.replace("ikh","hki")); // Nhkiil
console.log(name6.includes("khi")) // true

const name7 = "I m a good guy";
console.log(name7.split(" ")); // [ 'I', 'm', 'a', 'good', 'guy' ]


const name8 = "I-m-a-good-guy";
console.log(name7.split("-")); // [ 'I m a good guy' ]
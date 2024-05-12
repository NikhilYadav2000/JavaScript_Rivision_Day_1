console.log("1"+2); // 12
console.log(1+"2"); // 12
console.log("1"+"2"); // 12
console.log("1"+2+2); // 122
console.log(1+2+"2"); // 32

console.log(+true) // true, bcoz f + boolean got converted to number
console.log(+"") // 0, string-->number
let abc = "13";
console.log(+abc) // 13, string-->number
console.log(typeof abc) // 13, string
console.log(typeof +abc) // 13, string-->number

let num1,num2,num3;
num1=num2=num3=2+2;
console.log(num1); // 4
console.log(num2); // 4
console.log(num3); // 4

console.log(num1++); // 4
console.log(++num1); // 6
console.log("");

console.log("2">1);  // true // string-->number conversion
console.log(null>0); // false
console.log(null>=0); // true
console.log(null==0); // false
// comparison operators(<,>,<=,>=) converts null to number, but == doesnt
console.log("");
console.log(undefined>=0); // false
console.log(undefined>0); // false
console.log(undefined==0); // false
console.log("");

console.log("2"==2) // true, string-->number
console.log("2"===2); //false, no conversion, compiler checks both datatype and value now 
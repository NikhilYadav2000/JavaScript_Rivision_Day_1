const num1=13;
console.log(num1); // 13

const num2= new Number(10);
console.log(num2); // [Number: 10]

console.log(num2.toString()); // 10
console.log(typeof num2); // object(converted to string)

const num3=1310
console.log(num3.toFixed(2)) // 1310.00

const num4=23.89;
console.log(num4.toPrecision(3)); // Focus on initial 3 values // 23.9

const num5=123.89;
console.log(num5.toPrecision(3)); // Focus on initial 3 values // 124

const num6=1123.89;
console.log(num6.toPrecision(3)); // Focus on initial 3 values // 1.12e+3

const num7 = 100000000
console.log(num7.toLocaleString()); // according to american standards, it makes the digits look good
// 10,00,00,000

// console.log(num7.toLocaleString('en_IN'));

console.log("");
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.6)); // 5
console.log(Math.floor(4.6)); // 4
console.log(Math.min(4,5,3,6)); // 3
console.log(Math.max(7,4,5,3,6)); // 7
console.log(Math.random()); // will give value between 0-1
console.log(Math.floor(Math.random()*10)); // will give value between 0-9
console.log(Math.floor(Math.random()*10)+1); // will give value between 1-10

const min=10;
const max=20;
console.log(Math.floor((Math.random())*(max-min+1))+min) // between 10-20
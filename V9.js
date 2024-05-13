let myDate=new Date();
console.log(myDate); // 2024-05-13T05:45:35.085Z
console.log(myDate.toString()); // Mon May 13 2024 11:15:52 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Mon May 13 2024
console.log(myDate.toLocaleString()); // 13/5/2024, 11:16:36 am
console.log(typeof myDate); // object
console.log(typeof Date); // Function object

console.log("");
let myDate2=new Date(2023,0,23); // January starts with 0
console.log(myDate2.toDateString()); // Mon Jan 23 2023

console.log("");
let myDate3=new Date(2023,0,23,5,3);
console.log(myDate3.toLocaleString()); // 23/1/2023, 5:03:00 am
console.log(myDate3.toLocaleDateString()); // 23/1/2023

console.log("");
let myDate4=new Date("2023-01-14"); // if u give as a string then january should be 01 not 00
console.log(myDate4.toLocaleDateString()); // 14/1/2023

console.log("");
let myTimeStamp=Date.now();
console.log(myTimeStamp); // 1715579646080 milliseconds passed after js was created.
console.log(myDate4) // 2023-01-14T00:00:00.000Z
console.log(myDate4.getTime()) // 1673654400000, Time crossed after js creation till 14th of january 2023

console.log(Date.now()); // 1715579879249, gives in millisec
console.log(Math.floor(Date.now()/1000)); // 1715579879, gives in sec

let myDate5=new Date();
console.log(myDate5.getDate()); // 13
console.log(myDate5.getMonth()+1); // 5, if u dont add  4 then as jan is 0 then it will be one less then the actual month
console.log(myDate5.toDateString()); // Mon May 13 2024

console.log(`${myDate.getDay()}`);  // 1, Monday

// Format
console.log(myDate5.toLocaleString('default',{
    weekday:"long",
    month:"2-digit",
})) // 05 Monday
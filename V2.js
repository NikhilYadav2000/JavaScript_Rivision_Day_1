const accountId=13;
let accountEmail="Nikhil1310@gmail.com";
var accountPassword="1310"; // Dont use var because of issues in block and functional scope.
accountCity="Bhilai";
let accountState; // will give undefined on printing
// accountId=10; // const cant be changed
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
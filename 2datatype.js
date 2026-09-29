let name = "shubham";
let a = 29;
let ab = "29";
let why = true;
let user;
let userNull = null;
let abcd = 297373074750n;// <-- add 'n' here
let abd = BigInt(354654154654354); 
console.log(typeof name);     // "string"
console.log(typeof a);        // "number"
console.log(typeof why);      // "boolean"
console.log(typeof ab);       // "string"
console.log(typeof user);     // "undefined"
console.log(typeof userNull); // "object" (JavaScript quirk)
console.log(userNull);
console.log(typeof abcd);     // "bigint"
console.log(typeof abd)
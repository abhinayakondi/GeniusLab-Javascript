// Implicit conversion ir coercion

//String to Number (Concatentation)
let res = 5 + "5";  
console.log(res); // "55"

//Boolean to Number
//Automatically converts true to 1 and false to 0
let res2 = true + 1;  
console.log(res2); // 2

//String to Number (Equality Comparison ==)
console.log("5" - 2); 
console.log("5" * 2); 
console.log("10" / "2");

//Equality Comparison ==
let str = "5";
let num = 5;
console.log(str == num); // true
console.log(str === num); // false // Strict equality comparison no type conversion




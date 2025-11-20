console.log(0 == "0"); // true
console.log(0 == false); // true
console.log(" " + 0 == 0); // true 

console.log(null == undefined); // true 
console.log(null === undefined); // false
console.log(null + 1); // 1

console.log(NaN == NaN); // false
console.log(isNaN(NaN)); // true
// isNaN() function is used to check if a value is NaN
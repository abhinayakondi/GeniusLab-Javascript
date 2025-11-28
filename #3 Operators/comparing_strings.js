//Regular numerical comparisons
console.log("Regular Numerical Comparisons:");
console.log(5 > 0);
console.log(5 >= 5);
console.log(20 < 15);
console.log(5 <= 15);
console.log();

// Comparing strings lexicographically
console.log("String Comparisons:");
console.log("apple" < "banana"); // true
console.log("5" > "10");  // true
console.log("5" >= "15"); // true 
console.log("5" < "0"); // false
console.log("5" <= "0");  // false
console.log();

// Case-sensitive comparison
console.log("Case-Sensitive Comparison:");
console.log("Apple" < "apple"); // true because uppercase letters have lower ASCII values than lowercase letters
console.log();

// Comparing strings of different lengths
console.log("Different Length Strings:");
console.log("cat" < "catalog"); // true because cat is shorter than catalog        
console.log();

// Comparing strings with special characters
console.log("Special Characters in Strings:");
console.log("hello!" < "hello#"); // true because '!' has a lower ASCII value than '#'    
console.log();

// Comparing strings with numbers
// JavaScript converts strings to numbers for comparison 
// when one operand is a string and the other is a number
console.log("Strings vs Numbers:");
console.log(5 > "10"); // false
console.log("5" > 0); // true

console.log(5 >= "5"); // true
console.log("5" >= 15); // false

console.log(5 < "0"); // false
console.log("5" < 15); // true

console.log(5 <= "0"); // false
console.log("5" <= 15); // true
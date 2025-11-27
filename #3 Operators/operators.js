// Arithmetic Operators
console.log("Arithmetic Operators:");
const sum = 5 + 3; // Addition
const diff = 10 - 2; // Subtraction
const p = 4 * 2; // Multiplication
const q = 8 / 2; // Division
console.log(sum, diff, p, q); // comma operator used here to separate values in console.log and display them together all at once
console.log();

// Assignment Operators and Short-hand Operators
console.log("Assignment Operators:");
let n=10;
n+=5; // Equivalent to n = n + 5
n*=2; // Equivalent to n = n * 2
console.log(n); 
console.log();

// Comparison Operators
console.log("Comparison Operators:");
console.log(10 > 5);
console.log(10 == '10'); // Loose equality: value + type coercion
console.log(10 === "10"); // Strict equality: value only
console.log();

// Logical Operators
console.log("Logical Operators:");
const a = true, b = false;
console.log(a && b); // Logical AND
console.log(a || b); // Logical OR
console.log();

// Bitwise Operators
console.log("Bitwise Operators:");
console.log(5&1); // Bitwise AND
console.log(5|1); // Bitwise OR
console.log(5^1); // Bitwise XOR
console.log(~5); // Bitwise NOT
console.log();

// Ternary Operator
console.log("Ternary Operator:");
const age = 20;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status);
console.log();

// Comma Operator
console.log("Comma Operator:");
let n1, n2
const res = (n1 = 1, n2 = 2, n1 + n2);
console.log(res);
console.log();

// Unary Operators
console.log("Unary Operators:");
let x = 5;
console.log(++x); // Pre-increment
console.log(x--); // Post-decrement (Output: 6, then x becomes 5)
console.log();

// Relational Operators
console.log("Relational Operators:");
console.log(5 < 10);    // Less than
console.log(10 >= 10);  // Greater than or equal to
console.log(15 <= 20); // Less than or equal to
const obj = {length: 10};
console.log('length' in obj); // Checks whether the property exists inside the object. // Output: true
console.log();

// BigInt Operators
console.log("BigInt Operators:");
// Note: BigInt literals are created by appending 'n' to the end of an integer
// 'n' denotes that this number is a BigInt, not a normal Number.”
const big1 = 123456789012345678901234567890n;
const big2 = 987654321098765432109876543210n;
console.log(big1 + big2);
console.log(big2 - big1);
console.log();

// String Operators
console.log("String Operators:");
const str1 = "Hello, ";
const str2 = "World!";
console.log(str1 + str2); // Concatenation
console.log();

// Chaining Operators (?.)
console.log("Chaining Operators:");
const detailsObj = { name: "Abi", address: { city: "Toronto", province: "Ontario" } };
console.log(detailsObj.address?.city);
console.log(detailsObj.contact?.phone);
console.log();
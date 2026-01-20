// Arrow function =>
// n => n*n
// “a function that takes one parameter called n”
// x => y 
// Think: “function takes x and returns y”

// For learning and for simple code, arrow functions are kinda unnecessary.
// They exist for convenience, not because JavaScript couldn’t work without them.
// Implicit return for single expressions

//Syntax:
// const functionName = (parameters) => {  // function body  return result;};

//No parameters
console.log();
const greet = () => "Hi there!";
console.log(greet()); // Hi there!

// Single parameter
console.log();
const square = (n) => n * n;
console.log(square(4)); // 16

// Multiple parameters
console.log();
const add = (a, b) => a + b;
console.log(add(2, 5)); // 8

// Use braces {} for multiple statements
console.log();
const great = (a, b) => {
    if (a > b)
        return "a is greater";
    else
        return "b is greater";
}
console.log(great(3, 5));

//Object creation
console.log();
const obj = (firstname, lastname) => ({first:firstname, last:lastname});
let student1= obj("Abi", "Kondi");
let student2= obj("Sonu", "Kondi");
console.log(student1);
console.log(student2);

// Function Declaration: Can be called anywhere in the scope
// Function Expression: Can only be called after the line where it is defined
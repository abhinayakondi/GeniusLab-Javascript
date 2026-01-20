// Arrow function =>
// n => n*n
// “a function that takes one parameter called n”
// x => y 
// Think: “function takes x and returns y”

// For learning and for simple code, arrow functions are kinda unnecessary.
// They exist for convenience, not because JavaScript couldn’t work without them.

const greet = () => "Hi there!";
console.log(greet()); // Hi there!

const square = (n) => n * n;
console.log(square(4)); // 16

const add = (a, b) => a + b;
console.log(add(2, 5)); // 8

// Use braces {} for multiple statements
const great = (a, b) => {
    if (a > b)
        return "a is greater";
    else
        return "b is greater";
}
console.log(great(3, 5));

// Function Declaration: Can be called anywhere in the scope
// Function Expression: Can only be called after the line where it is defined
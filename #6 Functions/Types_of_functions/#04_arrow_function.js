// Arrow function =>
// n => n*n
// “a function that takes one parameter called n”
// x => y 
// Think: “function takes x and returns y”

// For learning and for simple code, arrow functions are kinda unnecessary.
// They exist for convenience, not because JavaScript couldn’t work without them.

const square = n => n * n;
console.log(square(4)); // 16

const add = (a, b) => a + b;
console.log(add(2, 5)); // 8
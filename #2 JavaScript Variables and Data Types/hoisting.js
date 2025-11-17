// Hoisting in JavaScript with var and let respectively

// a is hoisted and initialized with undefined
// So internally it is like:
// var a; // hoisted + initialized to undefined
console.log(a); // ✔️ prints: undefined
var a = 10;

// b is hoisted BUT NOT initialized
// b is in the "Temporal Dead Zone" (TDZ)
// Accessing a variable before it's declaration results is a Temporal Dead Zone, 
// Temporal Dead Zone prevents access to uninitialized variables.
console.log(b); // ❌ ReferenceError
let b = 20;

// Destructuring Assignment with let
let { name, age } = { name: "Pranjal", age: 20 };
console.log(name, age);


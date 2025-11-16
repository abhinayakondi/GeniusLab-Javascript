// Hoisting in JavaScript with var and let respectively

// a is hoisted and initialized with undefined
// So internally it is like:
// var a; // hoisted + initialized to undefined
console.log(a); // ✔️ prints: undefined
var a = 10;

// b is hoisted BUT NOT initialized
// b is in the "Temporal Dead Zone" (TDZ)
console.log(b); // ❌ ReferenceError
let b = 20;


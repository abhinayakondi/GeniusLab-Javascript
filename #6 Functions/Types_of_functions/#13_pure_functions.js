// Pure functions
// Rule 1: Same input -> Same output
// Rule 2: No side effects outside itself
// No printing to console
// No modifying global variables
// No changing input parameters
// No object mutation

// Example of a pure function
function add(a, b) {
    return a + b; // Always returns the same output for the same inputs
}

console.log(add(2, 3)); // 5

// Example of an impure function
console.log();
console.log("Impure tax function example");
let tax=0.1; // global variable

function calculateTotal(price) {
    return price + (price * tax); // Depends on external variable 'tax'
}
console.log(calculateTotal(100)); // 110

// Same as above but pure version
console.log();
console.log("Pure tax function example");
function calculateTotalPure(price, taxRate) {
    return price + (price * taxRate); // No dependency on external state
}
console.log(calculateTotalPure(100, 0.1)); // 110
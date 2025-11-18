// Old style
var a = 10  
var a = 15; // Allows re-declaration  

// Prferred for non-const
let b = 20;    

// Preferred for const (cannot be changed)
const c = 30;  

console.log(a);
console.log(b);
console.log(c);

// Destructuring Assignment with let
let { name, age } = { name: "Pranjal", age: 40 };
console.log(name, age);
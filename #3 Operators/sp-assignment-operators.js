// Falsey values include: 0, null, undefined, NaN, "", false
// Truthy values include: anything that is not falsey; non-zero numbers, non-empty strings, objects, arrays, true

//--------------------Short hand Logical AND assignment (&&=)----------------
// Assigns the value of y to x only if x is truthy
console.log("Short-hand Logical AND Assignment Operator:");
let x = 10;
let y = 5;

x &&= y;  
console.log(x);
console.log();

//--------------------Short hand Logical OR assignment (||=)-----------------
// Assigns the value of y to x only if x is falsy
console.log("Short-hand Logical OR Assignment Operator:");
let p = 0;
let q = 15;

p ||= q;  
console.log(p);
console.log();

//----------------------Nullish coalescing Assignment Operator(??=)-----------------
// Assigns the value of y to x only if x is null or undefined
console.log("Nullish Coalescing Assignment Operator:");
let a = 15;
let b = null;
let c = undefined;
let d = 25;
a ??= b;    
b ??= d;  
c ??= d;
console.log(a); // 15
console.log(b); // 25
console.log(c); // 25
console.log();  

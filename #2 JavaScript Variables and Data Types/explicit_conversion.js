// Number to String Explicit Conversion
let n = 123;
let s1 = String(n);  
let s2 = n.toString();  
console.log(s1)
console.log(s2)

// String to Number Explicit Conversion
let str = "123";
let num = Number(str); 
let num1= parseInt(str); 
let str1 = "12.34";
let num2 = parseFloat(str1);  
console.log(num)
console.log(num1)
console.log(num2)

// Boolean to Number Explicit Conversion
// true becomes 1 and false becomes 0
let b1 = true;
let b2 = false;     
let numB1 = Number(b1);  
let numB2 = Number(b2);  
console.log(numB1)  //1
console.log(numB2)  //0

// Converting to Boolean
//Automatically converts undefined, null, "" (empty string), false, NaN, and 0 to ==> false
//All other values are converted to ==> true
let res = Boolean(undefined);
let res1 = Boolean(null);
let res2 = Boolean(""); 
let res3 = Boolean(false);
let res4 = Boolean(NaN);
let res5 = Boolean(0);
let res6 = Boolean(1);
let res7 = Boolean("Hello");  
console.log(res)    // false
console.log(res1)   // false
console.log(res2)   // false        
console.log(res3)   // false
console.log(res4)   // false
console.log(res5)   // false
console.log(res6)   // true
console.log(res7)   // true
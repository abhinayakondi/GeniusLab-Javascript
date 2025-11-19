// Implicit conversion ir coercion

//String to Number (Concatentation)
let res = 5 + "5";  
console.log(res); // "55"

//Boolean to Number
//Automatically converts true to 1 and false to 0
let res2 = true + 1;  
console.log(res2); // 2

//String to Number (Equality Comparison ==)
let res3 = ("5" == 5);  
console.log(res3); // true

//Automatically converts undefined, null, "" (empty string), false, NaN, and 0 to ==> false
//All other values are converted to ==> true
let res4 = Boolean(undefined);
let res5 = Boolean(null);
let res6 = Boolean(""); 
let res7 = Boolean(false);
let res8 = Boolean(NaN);
let res9 = Boolean(0);
let res10 = Boolean("Hello");  
console.log(res4)
console.log(res5)
console.log(res6)
console.log(res7)
console.log(res8)
console.log(res9)
console.log(res10)
// JavaScript does not need to be declared with a specific data type
//----------------Numbers----------------
// There is only one type number that covers both integers and floating point numbers.

let n1 = 2;
console.log(n1)

let n2 = 1.3;
console.log(n2)

let n3 = Infinity;
console.log(n3)

let n4 = 'something here too' / 2;
console.log(n4)

//--------------Strings----------------

let s1 = "Hello There";
console.log(s1); 

let s2 = 'Single quotes work fine';
console.log(s2); 

let s3 = `can embed ${s1}`;
console.log(s3);

//--------------Booleans----------------

let b1 = true;
console.log(b1);  

let b2 = false;
console.log(b2);

//--------------Null----------------

let age = null;
console.log(age)

//-------------Undefined----------------

let a;
console.log(a);

//-------------BigInt----------------
// Used for integers larger than 2^53 - 1
// The largest number in JS that can be safely represented using Number primitive is 9007199254740991 (2^53 - 1) 
// known as MAX_SAFE_INTEGER
let b = BigInt("0b1010101001010101001111111111111111");
console.log(b);

const MaxBigInt = Number.MAX_SAFE_INTEGER;
console.log(MaxBigInt);

//------------Symbol----------------
// Used to create unique identifiers
let sym1 = Symbol("Geeks");
let sym2 = Symbol("Geeks");
console.log(sym1 == sym2);

//-----------Properties-----------

console.log(typeof NaN);   // NaN is of type number
console.log(NaN === NaN); // NaN is not equal to itself : false

// Same type for integer and floating-point: numbers
let x = 42;     // Integer
let y = 42.5;   // Floating-point

console.log(typeof x); 
console.log(typeof y);

// Same type for character and string: strings
let str1 = "gfg";   // String
let str2 = 'g';    // Character

console.log(typeof str1); 
console.log(typeof str2);
//-----------Objects-----------

let gfg = {
    type: "Company",
    location: "Noida"
}
console.log(gfg.type)

//-----------Arrays-----------

let a1 = [1, 2, 3, 4, 5];
console.log(a1);

let a2 = [1, "two", { name: "Object" }, [3, 4, 5]];
console.log(a2);

//-----------Functions-----------

function greet(name) { 
    return "Hello, " + name + "!"; 
}
console.log(greet("Abi"));

//-----------Date-----------

// Creating a new Date object for the
// current date and time
let currentDate = new Date();

// Displaying the current date and time
console.log(currentDate);

//-----------Regular Expressions-----------
// used to define search patterns for matching text in strings.

// Creating a regular expression to match the word "hello"
let pattern = /hello/;

// Testing the pattern against a string
// Returns false because "hello" is not present
let result = pattern.test("Hello, world!"); 
let result2 = pattern.test("hello, world!"); 

console.log(result); // Output: false
console.log(result2); // Output: true

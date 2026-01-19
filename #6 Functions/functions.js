// -----------Traditional Function Declaration Syntax-----------------
function Greetings(name){ // name is a parameter
    console.log("Hello, " + name + "!");
}

Greetings("Abi"); // "Abi" is an argument
Greetings("Sonu"); // "Sonu" is an argument
console.log();

//-------------------Default Parameters-----------------------
function greet(name = "Guest"){ // value used by default
    console.log("Welcome, " + name + "!");
}

greet();
greet("Alice");
console.log();

//-------------------Return Statement-----------------------
// return sends undefined when no value is specified
// Example 1
function toGreet(name = "Guest"){
    return ("Hi, " + name + "!");
}
let message1 = toGreet();
let message2 = toGreet("Bob");
console.log(message1);
console.log(message2);
console.log();

// Example 2
function add (a, b){
    return a + b;
}
let sum = add(5, 10);
console.log("Sum: " + sum); 
let sum2 = add(20, 30);
console.log("Sum: " + sum2);

// returning an object
function person(name, age){
    let obj = {
        name: name,
        age: age,
    };
    return obj;
}
let res=person("Charlie", 25);
console.log(res);
console.log();

//-------------------Function Expressions-----------------------
// We may assign a function to a variable and then utilize that variable as a function in JS
// Function expression can  be anonymous or named
// Can only be invoked after its definition unlike function declarations

// Anonymous Function Expression 
let welcome=function(name){
    return "Welcome to the Genius Lab, " + name + "!";
}
console.log( welcome("Abi") );

// Named Function Expression
let farewell = function goodbye(name){
    return "Goodbye, " + name + "! See you again.";
}   
console.log( farewell("Abi") );
// Note: We cannot call goodbye() directly as it is not defined in the outer scope
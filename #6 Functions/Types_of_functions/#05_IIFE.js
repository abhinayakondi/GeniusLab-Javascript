// IIFE -> Immediately Invoked Function Expression
// A function that runs immediately after it’s created.

// IIFEs are for:
// One-time setup
// One-time initialization

//---------Anonymous IIFE-------------
console.log();
(function (){
    console.log("This is an IIFE!");
})();

let welcome = (function(){
    return "Welcome to Genius Lab!";
})();
console.log(welcome);

//-----------Named IIFE--------------
(function greet(){
    console.log("Hello from Named IIFE!");
})();

//greet(); 
// Error: greet is not defined

//-----------Arrow function IIFE--------------
(
    () => console.log("Hello from Arrow function IIFE")
)();

// Try to run this code. If something goes wrong, catch the error and handle it

try {
    dadalert("Welcome Fellow Geek!"); // here dadalert is just a function that does not exist
}
catch (err) {
    console.log(err);
}
console.log();

// The throw statement allows you to create custom error messages and throw exceptions manually.
// Earlier it was a ReferenceError because dadalert is not defined as described by the compiler.
// Now, we can throw our own error message. 

try {
    throw new Error("Custom Error: dadalert is not defined. Did you mean alert()?");
}
catch (e) { // here e or err are just variable names and not keywords
    console.log(e);
}
console.log();

// The finally block executes unconditionally after the try and catch blocks, 
// regardless of whether an error was thrown or caught.

try {
    console.log("try"); // this will run without any error
}
catch (e) {
    console.log("catch"); // since there is no error, this block will be skipped
}
finally {
    console.log("finally");
}
console.log();

// Another example where an error is thrown and caught

try{
    throw new Error("This is a custome error message ;)");
}
catch(e){
    console.log("Caught an error: " + e);
}
finally{
    console.log("Execution completed.");        
}
console.log();

//============================================================
// Creating custome error types by extending the Error class
//============================================================
function ValidateInput(value) {
    if (value<0){
        throw new ValidationError("Input must be a non-negative number.");
    }
    return "Valid input";
}
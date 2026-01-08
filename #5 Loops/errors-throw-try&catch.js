// Try to run this code. If something goes wrong, catch the error and handle it

try {
    dadalert("Welcome Fellow Geek!"); // here dadalert is just a function that does not exist
}
catch (err) {
    console.log(err);
}

// The throw statement allows you to create custom error messages and throw exceptions manually.
// Earlier it was a ReferenceError because dadalert is not defined as described by the compiler.
// Now, we can throw our own error message. 

try {
    throw new Error("Custom Error: dadalert is not defined. Did you mean alert()?");
}
catch (e) { // here e or err are just variable names and not keywords
    console.log(e);
}
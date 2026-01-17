// Function as a parameter
// Callback is just a variable that holds a function
// It means we can pass functions as arguments to other functions
// Callback here is just a variable name and not a special keyword

function num(n, callback) {
    return callback(n); // Here callback = double and we are calling it
}

function double(x) {
    return x * 2;
}

// Also can be written as an arrow function
//const double = (n) => n*2;

console.log(num(5,double)); // we are passing a function as an argument
// Output: 10
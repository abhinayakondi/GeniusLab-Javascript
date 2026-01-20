// Normally assigned to a variable
// Used for one-time execution
// Does not have a name

const greet = function() {
  return "Hi there!";
};
console.log(greet()); // Hi there!

// Arrow function are also anonymous functions
let hello = () => {
  console.log("Hello!");
}
hello();
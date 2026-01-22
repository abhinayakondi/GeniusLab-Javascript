// ?bind()?
// When bind is called on a function, it creates a new function
// New function name = "bound " + " " + original function name

function greet(){
    console.log("Welcome to Genius Lab!");
}
console.log(greet.name); //greet

let func=greet.bind({});
console.log(func.name); //bound greet

// Use of bind
console.log();
console.log("Use of bind:");
let user = {
  name: "Abi",
  greet() {
    console.log("Hi, " + this.name);
  }
};

setTimeout(user.greet, 1000);
setTimeout(user.greet.bind(user), 1000);

user.greet();
user.greet.bind(user)();
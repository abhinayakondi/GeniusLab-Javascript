// If no argument is provided, the default value is used

function greet(name = "Guest"){ // value used by default
    console.log("Welcome, " + name + "!");
}

greet();
greet("Alice");
console.log();
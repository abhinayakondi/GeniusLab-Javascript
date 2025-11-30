//The typeof operator in JavaScript is used to determine the data type of a value or variable. 
// It returns a string indicating the type, such as "string", "number", "boolean", "object", etc.
console.log(typeof "Hello");
console.log(typeof 42);     
console.log(typeof true);
console.log(typeof {});      
console.log(typeof undefined);

//Examples
function fun(input) {
    if (typeof input === "number") {
        console.log("Valid number provided!");
    } else {
        console.log("Please provide a number.");
    }
}
fun(42);
fun("Hi");

// Dynamic Property Access
const settings = { darkMode: true };
if (typeof settings.darkMode === "boolean") {
    console.log("Dark mode setting is valid.");
}
else {
  	console.log("Light mode setting is valid.")
}

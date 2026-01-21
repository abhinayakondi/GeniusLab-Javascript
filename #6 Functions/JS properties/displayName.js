//func.displayName is used to set or get the name of a function for debugging purposes.

console.log();
function func() {
    console.log("This is func");
}
func.displayName = "MyFunction";
console.log(func.displayName); 

console.log();
function func1(){
    console.log("This is func1");
}
func1.displayName = "MyFunctionOne";
console.log("function is " + func1); // displays the complete function definition
console.log("Name of the function is " + func1.name);
console.log("Display name of the function is "+func1.displayName);
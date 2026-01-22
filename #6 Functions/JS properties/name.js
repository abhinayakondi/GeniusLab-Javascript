// Displays the name of the function

function greet() {
  console.log("Hello!");
}

console.log(greet.name);
console.log("Return datatype of function.name is " +typeof(greet.name));

//In an object
console.log();
let obj = {
    function1: function functionName1(){}, 
    //here function name is functionName1 and object key name is function1

    function2: () => {
        console.log("This is function2");
    },

    function3:() => {
        obj.function2();
    }
}

obj.function3(); 
console.log("Name of function1 is " + obj.function1.name);
console.log("Name of function2 is " + obj.function2.name);
// since function 2 doesn't have a function name
// object key name or variable is displayed as the function name instead

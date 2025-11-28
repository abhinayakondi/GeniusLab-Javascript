// Regular ternary operator:
let PMarks = 50;
let res = (PMarks > 39) ? "Pass" : "Fail";

console.log(res);

//Nested ternary operator:
let day = 3;
let greeting = (day === 1) ? 'Start of the week' :
               (day === 2) ? 'Second day' :
               (day === 3) ? 'Midweek' :
               (day === 4) ? 'Almost weekend' :
               'Weekend';

console.log(greeting);

//Ternary operator in function calls:
function checkAge(age) {
  return (age >= 18) ? 'Adult' : 'Minor';
}

console.log(checkAge(20));  
console.log(checkAge(15));

// Ternary operator with function calls:
function sayHello(name) {
    console.log("Hello, " + name);
}

function sayGoodbye(name) {
    console.log("Goodbye, " + name);
}

let firstName = "Abi";
let isLeaving = false;

isLeaving? sayGoodbye(firstName) : sayHello(firstName);
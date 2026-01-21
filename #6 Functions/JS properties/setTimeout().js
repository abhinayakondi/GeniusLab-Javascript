//Function will be executed after specified time

//Function declared inside setTimeout
//Using Anonymous function
console.log();
setTimeout(function(){
    console.log("Welcome to Genius Lab!");
},2000);

//a
setTimeout(console.log, 2000);

let hello=function(){
    console.log("Hello!");
}
setTimeout(hello,3000);

//Function declared outside setTimeout
//Using Named function
setTimeout(console.log, 2000);

function greet(){
    console.log("Hi there!");
}
setTimeout(greet,3000);
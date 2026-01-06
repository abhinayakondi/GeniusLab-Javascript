//The forEach loop executes a provided function once for each element in an array.

// Here num represents each element in the numbers array during each iteration.
// num is not declared with let or const because it is a parameter of the function
// A callback is a function you pass as an argument to another function so it can run later.
// A function here is -> function(num) { console.log(num); }
// Another function here is -> forEach(...)
// JavaScript treats functions as first-class citizens, so you can pass them around like variables.

// You can think of forEach as not a for-loop
// but a function (built in array method) that takes another function as an argument
// and calls that function within for each element of the array.

//for each element in an array
const numbers = [10, 20, 30];

// original declaration
console.log("---- Original Declaration ----");
numbers.forEach(function func(num) 
{ 
  console.log(num);
}); // function within a function


//works without a function name declaration too
console.log("---- Without function name ----");
numbers.forEach(function(num) 
{ 
  console.log(num);
});

// can also be written using arrow function syntax
console.log("---- Using Arrow Function ----");
numbers.forEach(num => { console.log(num) }); // same output

//regular for loop to print all the elements of an array
console.log("---- Regular for loop ----");
let arr = [10, 20, 30];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); 
}

//forEach with indexing
console.log("---- forEach with Indexing ----");
numbers.forEach(function(num, index) 
{ 
  console.log("Index:"+index+" Value:"+num);
});
// Useful when you don't know how many arguments will be passed to the function.
// Take all arguments passed to this function and put them into an array called nums.

// Regular array calculation
function add(...numbers) {
  let total = 0;
  let i=0;
  for (i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total;
}
console.log(add(1, 2, 3, 4, 5)); // 15

//----------------------------------------------------------------
// Using reduce 

/*
reduce() method combines all values in an array into one value.
(a, b) => a + b → how to combine two numbers
0 → starting value
*/
function sum(...nums){
    let total = nums.reduce( (a,b)=>a+b , 0 );
    return total;
}

console.log(sum(1,2,3,4)); //10
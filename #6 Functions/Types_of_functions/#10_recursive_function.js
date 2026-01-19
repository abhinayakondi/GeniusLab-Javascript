function factorial(n) {
  if (n === 0) 
    return 1;

  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

//Also be wriiten as
/*
function factorial(n) {
  if (n === 0) 
    return 1;

  n = n * factorial(n - 1);
  return n;
}
console.log(factorial(5)); // 120
*/
/*Use of generator functions to yield multiple values over time.
//Normal function:
function f() {
  return 1;
  return 2; // unreachable
}

Generator:
function* g() {
  yield 1;
  yield 2;
}
//Multiple returns, over time.
*/

// This function can pause execution using yield and resume later.
// Yield pauses execution logically, not in real time.
// Yield returns an object with 'value' and 'done' properties.
// Done is true when there are no more yields left.
function* numbers() {
  yield 9;
  yield 4;
  yield 7;
}

const gen = numbers();
console.log(gen.next().value); // next() resumes execution to the next yield
console.log(gen.next().value); 
// The inner function has access to the variables and arguments of the outer function.
// The inner function can be called only from within the outer function.
function outerFun(a) {
    function innerFun(b) {
        return a + b; // 10 + 5 = 15
    }
    return innerFun;
}

const addTen = outerFun(10);
console.log(addTen(5));

// Here outerFun returns innerFun
// so addTen = innerFun

// Example 2
// Simple nested function
console.log();
function outer(a, b) {
    function inner() {
        return a + b;
    }
    console.log(inner());
}
outer(2, 3);

// Example 3
// Nested functions with multiple arguments
function add(x,y){
    function product(a,b){
        return a * b + x + y;
    }
    product(2,3);
}
add(1,2); // returns 9 


// Example 4
// Encapsulation using nested functions
console.log();
function counter() {
    let count = 0;
    function increment() {
        count += 1;
        return count;
    }
    return increment;
}

const myCounter = counter();
console.log(myCounter());
console.log(myCounter());

// Here the encapsulated variable 'count' is not accessible from outside the counter function.
// Normally local variables die after a function finishes
// However count doesn't disappear 
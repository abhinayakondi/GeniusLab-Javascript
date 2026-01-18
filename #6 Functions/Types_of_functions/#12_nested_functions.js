// The inner function has access to the variables and arguments of the outer function.
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

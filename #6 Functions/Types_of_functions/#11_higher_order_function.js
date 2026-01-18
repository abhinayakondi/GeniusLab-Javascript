// Where a higher order function is a function that 
// either takes another function as an argument
// or returns a function.

// Returns a function

function multiplyBy(factor){
    return function (num){
        return num * factor;
    };
}

const fun = multiplyBy(3); 
console.log(fun(5)); // 15
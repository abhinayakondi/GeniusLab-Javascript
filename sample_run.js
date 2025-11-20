// Hoisting in nested Functions
function outer() {
    console.log("a " + a); // undefined
    var a = 5;
    function inner() {
        console.log("b " +b); // undefined
        var b = 10;
    }
    inner();
}
outer();
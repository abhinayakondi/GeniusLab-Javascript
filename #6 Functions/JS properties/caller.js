// Do not use it in real code or production, because it is non-standard
// It tells you which function called the current function.(So here func1 called func2)
// currentFunc.caller => returns otherFunc
// Here currentFunc=func2 and otherFunc=func1

function func2() {
    console.log("This is from function 2");
    console.log("caller is:", func2.caller);
}

function func1() {
    func2();
}

func1();
console.log();
console.log("from function.caller: ", func1.caller)//null
console.log("from function.caller: ", func2.caller)//null

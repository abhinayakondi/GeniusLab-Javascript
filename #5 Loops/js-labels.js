// Labels in JavaScript provide a way to name a loop, which can then be referenced using break or continue. 
// This is useful when dealing with nested loops, where break or continue needs to be applied to a specific loop.

// It is okay to use the same label name (outerLoop) multiple times 
// in different code blocks as labels are scoped to their respective blocks.

//using break;
console.log("using break");
outerLoop:
for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
        if(j===1)
            break outerLoop;
        console.log(i, j);
    }
}
console.log();

//using continue;
console.log("using continue");
outerLoop:
for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
        if(j===1)
            continue outerLoop;
        console.log(i, j);
    }
}
console.log();

//similar output of previous code with just break statement
//logical exploration
console.log("using only break");
outerLoop:
for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
        if(j===1)
            break;
        console.log(i, j);
    }
}
console.log();

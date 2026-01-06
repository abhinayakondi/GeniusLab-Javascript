// It executes the code block atleast once before checking the condition.
// Also called as exit controlled loop

let i = 0;
do {
    console.log("Iteration:", i);
    i++;
} while (i < 3);

// do...while executed at least once even if the condition is false
let test = 1;
do {
    console.log(test);
} while(test<1)

while(test<1){
    console.log(test);
} // this will not execute
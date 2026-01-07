// continue skips the current iteration of a loop and moves to the next iteration.

for (let i=1; i<=10; i++) {
    if (i%2==0) // skip even numbers
        continue;
    console.log(i);
}
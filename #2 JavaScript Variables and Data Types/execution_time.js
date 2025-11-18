let a = new Array(10).fill(0);
// Array of 10 elements initialized to 0

// Inefficienr loop

console.time('Execution time') // Starts timer for time measurement
for (let i = 0; i < a.length; i++) {
    console.log(i)
}
console.timeEnd('Execution time') // Ends timer and logs the time taken



// Optimized loop 

let len = a.length;
console.time('Execution time')
for (let i = 0; i < len; i++) {
    console.log(i)
}
console.timeEnd('Execution time')
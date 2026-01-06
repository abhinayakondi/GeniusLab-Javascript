//For iterables ,  the below loops are preferred.
//iterable objects such as arrays, strings, maps, sets:

//for...of Loop if we need to put continue or break in the loop 
//forEach() if we need execute something for all elements without any condition
//for...in loop is better suited for objects.

// Used in Arrays

const a = [ 1, 2, 3, 4, 5 ];

for (let item of a){
    console.log(item);
}
console.log();

// Used in Strings
const str = "Hello";

for (let char of str){
    console.log(char);
}
console.log();

// Used in Maps
const m = new Map([
    ["name", "Abi"],
    ["age", 21],
    ["city", "Toronto"]
]);

console.log("With interpolation");
for (let [key, value] of m){
    console.log(`${key},${value}`);// ` (backticks) used for string interpolation
    // Interpolation = embed variables or expressions inside a string automatically.
}

console.log("Without interpolation");
for (let [key, value] of m){
    //Older version or withour interpolation
    console.log(key + "," + value);
}
console.log();

// Used in Sets
let s= new Set([1,2,3,4,5]);

for (let val of s){
    console.log(val);
}
console.log();

// Used in Objects
let ob={
    name: 'Abi',
    age: 21,
    city: 'Toronto'
};

for(let fob of Object.keys(ob)){
    console.log(`${fob}: ${ob[fob]}`); // String interpolation
}
console.log();

// Here Object.keys(), Object.values(), or Object.entries() are keywords and cannot be replaced
// The loop iterates over the keys of the person object and prints each key with its corresponding value.
// Here key represents the property names of the object.
// and person[key] accesses the value associated with each key.

//for keys in an object
const person = { 
    name: "Abi", 
    age: 21, 
    city: "Toronto" 
};

for (let key in person) {
  console.log(key, ":", person[key]); 
}
// key is not a reserved keyword; 
// it's just a variable name again, not declared like in callback functions
// displays each value as its own data type
// console.log(key+ " : " +person[key]); displays the same output but as a concatenated string

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

for (let a in car) {
    console.log(`${a}: ${car[a]}`);
}
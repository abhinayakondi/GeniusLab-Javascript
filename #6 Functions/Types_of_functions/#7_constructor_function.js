// Constructor functions create objects using the 'new' keyword

function Person(name, age, country, city, height){
    this.name = name;
    this.age = age;
    this.country = country;
    this.city = city;
    this.height = height;
}

const person1 = new Person("Alice", 30, "USA", "New York", "5.5ft");
const person2 = new Person("Bob", 25, "Canada", "Toronto", "6ft");

console.log(person1);
console.log(person2);  

// Benefits of constructor functions:
// 1. Reusability: Create multiple objects with the same structure easily.
// 2. Organization: Group related properties and methods together.
// 3. Clarity: Clearer syntax for creating objects compared to object literals.
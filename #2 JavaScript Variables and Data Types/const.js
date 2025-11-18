//Const also creates a Temporal Dead Zone (TDZ) like let
// So accessing it before declaration will throw ReferenceError

const ob = { a: 10 };
ob.a = 20; // Allowed
console.log(ob.a);  // 20   

const obj = { name: "Pranjal" };
obj.name = "Abhinaya";
console.log(obj.name); 

// Destructuring Assignment with const
const { name, age } = { name:"Sohan", age: 15 };
console.log(name, age);

// Immutable Binding, Not Value
// You can still modify its properties or contents.
const arr = [10, 20, 30]
arr[2] = 40
console.log(arr)  // Allowed

const array = [1, 2, 3];
array.push(4); 
console.log(array);



/* TypeError in the below lines
obj = { b: 30 }; 
arr = [50, 100] 
So basically the complete const array cannot be replaced*/
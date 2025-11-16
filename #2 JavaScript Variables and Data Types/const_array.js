const ob = { a: 10 };
ob.a = 20; // Allowed

const arr = [10, 20, 30]
arr[2] = 40
console.log(arr)  // Allowed

/* TypeError in the below lines
obj = { b: 30 }; 
arr = [50, 100] 
So basically the complete const array cannot be replaced*/
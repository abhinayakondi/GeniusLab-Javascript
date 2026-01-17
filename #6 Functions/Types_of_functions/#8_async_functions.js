// Async always returns a Promise
// .then(...) works only on Promises
// A Promise is a real JavaScript data type (object), 
// but it’s a special kind of object, not a primitive like string or number
async function fetchData() {
  return "Data fetched!";
}
fetchData().then(console.log); 

// JS turns non-Promise return values into resolved Promises as shown below:
async function grabData() {        
   return Promise.resolve("Got Data!");    
}
grabData().then(console.log);

// Await can only be used inside async functions
async function getData() {
  const data = await fetchData();
  console.log(data);
}
getData();
// Methods are functions stored as object properties.
// Here employee is an object with properties name, dept, details
// Where details is the function
let employee = {
    name: "Abi",
    dept: "Logistics and Analytics",
    details: function () {
        return this.name + " works in the department " + this.dept;
    }
};

console.log(employee.details());
let http = require ('http');
// Importing the HTTP module to create a server
// module.exports = { Student }; and 
// const { Student } = require('./module1.js'); are used for exporting and importing variables between files in Node.js
// for Server-Side programming only

const { Student } = require('./module1.js');
// Importing the Student object from module1.js

let Dormitory = {
    student_count: 500,
    no_of_rooms: 250,
    fees: 12000
}

let Dorm_Allocation = {
    room_no: 151,
    student_name: Student.name,
    student_Age: Student.age,
    student_dept: Student.dept,
    total_fees: 12000
}

let str = "Room No: " + Dorm_Allocation.room_no + "\n" +
          "Student Name: " + Dorm_Allocation.student_name + "\n" +
          "Total Fees: " + Dorm_Allocation.total_fees;

http.createServer(function (req, res) {
    res.write(str);
    res.end();
}).listen(8080);
// Creating a server that listens on port 8080 and responds with dormitory allocation details
// To view the output, open a web browser and navigate to http://localhost:8080
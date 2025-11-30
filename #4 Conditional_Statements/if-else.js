// JavaScript program to illustrate If statement
let age = 19;

if (age > 18)
console.log("Congratulations, You are eligible to drive");

// JavaScript program to illustrate If-else statement
let i = 10;

if (i < 15)
    console.log("i is less than 15");
else
    console.log("I am Not in if");

// JavaScript program to illustrate nested-if statement
let num = 10;

if (num == 10) {  // First if statement
    if (num < 15) {
        console.log("num is smaller than 15");
        // Nested - if statement
        // Will only be executed if statement above
        // it is true
        if (num < 12)
            console.log("num is smaller than 12 too");
        else
            console.log("num is greater than 15");
    }
}

// JavaScript program to illustrate if-else-if ladder
let score = 86;  // change this to test different scores
let grade;

if (score >= 90) {
  grade = "A+";
} else if (score >= 80) {
  grade = "A";
} else if (score >= 75) {
  grade = "B+";
} else if (score >= 70) {
  grade = "B";
} else if (score >= 65) {
  grade = "C+";
} else if (score >= 60) {
  grade = "C";
} else if (score >= 55) {
  grade = "D+";
} else if (score >= 50) {
  grade = "D";
} else {
  grade = "F";
}

console.log(`Your grade is: ${grade}`);



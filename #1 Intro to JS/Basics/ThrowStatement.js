function checkAge(age) {
    if (age < 18) {
        throw new Error("Age must be 18 or older :(");
    }   
}
checkAge(16);

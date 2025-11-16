try {
    let result = someUndefinedFunction(); // This will throw an error // This function is not defined
    console.log(result);
} catch (error) {
    console.error("An error occurred:", error.message);
}
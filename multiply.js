// function to multiply two numbers
function multiply(a, b) {
    return a * b;
}


// Path: divide.js
// function to divide two numbers
function divide(a, b) {

    // check if b is zero
    if (b == 0) {
        throw new Error("Divide by zero error");
    }

    return a / b;
}   

// Path: subtract.js
// function to subtract two numbers
function subtract(a, b) {
    return a - b;
}   

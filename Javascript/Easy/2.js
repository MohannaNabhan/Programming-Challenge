

// Ask the user to enter two numbers
let firstNumber = prompt("Enter the first number:");
let secondNumber = prompt("Enter the second number:");

// Convert the inputs to numbers
firstNumber = parseFloat(firstNumber);
secondNumber = parseFloat(secondNumber);

// Ask the user what operation they want to perform
let operation = prompt("Choose an operation: addition (+), subtraction (-), multiplication (*), or division (/)");

// Perform the corresponding operation based on user input
let result;

if (operation === "+") {
    result = firstNumber + secondNumber;
} else if (operation === "-") {
    result = firstNumber - secondNumber;
} else if (operation === "*") {
    result = firstNumber * secondNumber;
} else if (operation === "/") {
    // Check if the second number is not zero to avoid division by zero
    if (secondNumber !== 0) {
        result = firstNumber / secondNumber;
    } else {
        console.log("Error: Division by zero is not allowed.");
    }
} else {
    console.log("Invalid operation. Please choose a valid operation: +, -, *, or /");
}

// Display the result in the console
if (result !== undefined) {
    console.log("Result: " + result);
}

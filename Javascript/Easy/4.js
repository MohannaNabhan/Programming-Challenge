// Challenge: Average Calculator
// Level: Beginner
// Description: This challenge involves creating a program that calculates the average of a list of numbers entered by the user.

// Instructions:
// 1. Ask the user to enter the number of values they want to average.
// 2. Create a variable to store the sum of the numbers, initializing it to 0.
// 3. Using a for loop, prompt the user to enter each number in the list and add it to the sum.
// 4. After the loop, calculate the average by dividing the sum by the number of values entered.
// 5. Display the average result in the console.

// Good luck!

// Ask the user to enter the number of values to average
let numValues = prompt("Enter the number of values you want to average:");

// Convert the input to a number
numValues = parseInt(numValues);

// Create a variable to store the sum of the numbers, initializing it to 0
let sum = 0;

// Using a for loop, prompt the user to enter each number in the list and add it to the sum
for (let i = 0; i < numValues; i++) {
    let currentNumber = prompt("Enter number " + (i + 1) + ":");
    // Convert the input to a number
    currentNumber = parseFloat(currentNumber);
    // Add the current number to the sum
    sum += currentNumber;
}

// After the loop, calculate the average by dividing the sum by the number of values entered
let average = sum / numValues;

// Display the average result in the console
console.log("The average is: " + average);

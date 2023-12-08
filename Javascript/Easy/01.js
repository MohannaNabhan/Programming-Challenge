/*

Challenge: Add two numbers
Level: Beginner
Description: Create a program that adds two numbers entered by the user and displays the result.
Instructions:
1. Ask the user to enter the first number.
2. Store the entered number in a variable.
3. Ask the user to enter the second number.
4. Store the second number entered in another variable.
5. Add the two numbers and store the result in a third variable.
6. Display the result in the console.

You can use the Prompt() functions to get the user input and console.log() to display the output.

Good luck!

*/


// Ask the user to enter the first number
let firstNumber = prompt("Enter the first number:");

// Convert the input to a number (since prompt returns a text string)
firstNumber = parseFloat(firstNumber);

// Ask the user to enter the second number
let secondNumber = prompt("Enter the second number:");

// Convert the input to a number
secondNumber = parseFloat(secondNumber);

// Add the two numbers
let result = firstNumber + secondNumber;

// Display the result in the console
console.log("The result of the sum is: " + result);
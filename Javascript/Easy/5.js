// Challenge: Celsius to Fahrenheit Temperature Converter
// Level: Beginner
// Description: This challenge involves creating a program that converts a temperature entered by the user from Celsius to Fahrenheit.

// Instructions:
// 1. Ask the user to enter a temperature in Celsius.
// 2. Create a variable to store the temperature in Fahrenheit.
// 3. Use the conversion formula: F = (C * 9/5) + 32, where F represents Fahrenheit and C represents Celsius.
// 4. Display the result of the conversion in the console.

// Good luck!

// Ask the user to enter a temperature in Celsius
let celsiusTemperature = prompt("Enter the temperature in Celsius:");

// Convert the input to a number
celsiusTemperature = parseFloat(celsiusTemperature);

// Use the conversion formula to calculate the temperature in Fahrenheit
let fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;

// Display the result of the conversion in the console
console.log("The temperature in Fahrenheit is: " + fahrenheitTemperature.toFixed(2));

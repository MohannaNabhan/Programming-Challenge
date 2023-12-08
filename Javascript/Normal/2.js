// Challenge: Age Calculator in Days
// Level: Intermediate
// Description: This challenge involves creating a program that calculates a person's age in days.

// Instructions:
// 1. Ask the user to enter their date of birth in the format "dd/mm/yyyy".
// 2. Use the new Date() function to get the current date.
// 3. Calculate the difference between the current date and the date of birth in milliseconds.
// 4. Convert the difference in milliseconds to days.
// 5. Display the person's age in days to the user.

// Good luck!

// Ask the user to enter their date of birth
let dobInput = prompt("Enter your date of birth (dd/mm/yyyy):");

// Parse the date of birth input into a Date object
let dob = new Date(dobInput);

// Get the current date
let currentDate = new Date();

// Calculate the difference between the current date and the date of birth in milliseconds
let timeDifference = currentDate - dob;

// Convert the difference in milliseconds to days
let ageInDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// Display the person's age in days to the user
alert("Your age in days is approximately: " + ageInDays);

// Challenge: Email Address Validator
// Level: Intermediate
// Description: This challenge involves creating a function that validates if an email address entered by the user is valid.

// Instructions:
// 1. Ask the user to enter an email address.
// 2. Create a function that takes the email address as an argument.
// 3. Within the function, use regular expressions to check if the email address conforms to the standard format.
// 4. Return true if the email address is valid and false if it's not.
// 5. Display the result to the user.

// Good luck validating email addresses!

// Function to validate an email address
function validateEmailAddress(email) {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email address against the regular expression
    return emailRegex.test(email);
}

// Ask the user to enter an email address
let userEmail = prompt("Enter your email address:");

// Call the validateEmailAddress function and display the result
if (validateEmailAddress(userEmail)) {
    alert("The email address is valid.");
} else {
    alert("The email address is not valid.");
}

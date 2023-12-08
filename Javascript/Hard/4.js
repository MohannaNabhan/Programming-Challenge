// Challenge: Secure Password Validation
// Level: Difficult
// Description: In this challenge, you will be asked to write a function that validates whether a password is secure or not. A password is considered secure if it meets the following requirements:
// - Has a minimum length of 8 characters
// - Contains at least one uppercase letter
// - Contains at least one lowercase letter
// - Contains at least one number
// - Contains at least one special character (e.g., !@#$%^&*)

// Instructions:
// 1. Define a function called validatePassword that takes a parameter password.
// 2. Inside the function, use regular expressions to check if the password meets the requirements.
// 3. Use the following regular expressions for validation:
//    - To check minimum length of 8 characters: /.{8,}/
//    - To check at least one uppercase letter: /[A-Z]/
//    - To check at least one lowercase letter: /[a-z]/
//    - To check at least one number: /[0-9]/
//    - To check at least one special character: /[!@#$%^&*]/
// 4. Use the test function of the regular expression to check if the password meets each of the requirements.
// 5. Return true if the password meets all the requirements, otherwise, return false.

// Good luck!

// Function to validate a secure password
function validatePassword(password) {
    // Regular expressions for validation
    const minLengthRegex = /.{8,}/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*]/;

    // Test each condition using regular expressions
    const hasMinLength = minLengthRegex.test(password);
    const hasUppercase = uppercaseRegex.test(password);
    const hasLowercase = lowercaseRegex.test(password);
    const hasNumber = numberRegex.test(password);
    const hasSpecialChar = specialCharRegex.test(password);

    // Return true if all conditions are met, otherwise, return false
    return hasMinLength && hasUppercase && hasLowercase && hasNumber && hasSpecialChar;
}

// Example usage:
let userPassword = prompt("Enter a password:");
let isSecure = validatePassword(userPassword);

if (isSecure) {
    console.log("Password is secure!");
} else {
    console.log("Password is not secure. Please follow the requirements.");
}

// Challenge: Random Password Generator
// Level: Intermediate
// Description: This challenge involves creating a program that generates a random password with a length specified by the user.

// Instructions:
// 1. Ask the user to enter the desired length for the password.
// 2. Create a variable to store the generated password, initializing it as an empty string.
// 3. Create a character set that will serve as the basis for generating the password. It can contain letters (both uppercase and lowercase) and/or numbers.
// 4. Using a for loop, generate a random index in each iteration and append the corresponding character from the character set to the password.
// 5. After finishing the loop, display the generated password using alert().

// Good luck!

// Ask the user to enter the desired length for the password
let passwordLength = prompt("Enter the desired length for the password:");

// Convert the input to a number
passwordLength = parseInt(passwordLength);

// Create a variable to store the generated password, initializing it as an empty string
let generatedPassword = "";

// Create a character set for the password generation (letters and numbers)
const characterSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// Using a for loop, generate the random password
for (let i = 0; i < passwordLength; i++) {
    // Generate a random index to pick a character from the character set
    let randomIndex = Math.floor(Math.random() * characterSet.length);
    
    // Append the randomly chosen character to the generated password
    generatedPassword += characterSet.charAt(randomIndex);
}

// Display the generated password using alert()
alert("Generated Password: " + generatedPassword);

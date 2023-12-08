// Challenge: Caesar Cipher
// Level: Less Difficult
// Description: This challenge involves creating a program that implements the Caesar Cipher, a simple encryption technique that shifts each letter of the alphabet a fixed number of positions to the right.

// Instructions:
// 1. Ask the user to enter a message to encrypt.
// 2. Ask the user to enter a shift number.
// 3. Iterate through each letter of the message and apply the rightward shift.
// 4. Ensure to maintain the case sensitivity.
// 5. If a letter reaches the end of the alphabet, wrap around to the beginning.
// 6. Display the encrypted message to the user.

// Good luck creating a program that implements the Caesar Cipher!

// Function to perform Caesar Cipher encryption
function caesarCipher(message, shift) {
    let encryptedMessage = "";

    for (let i = 0; i < message.length; i++) {
        let char = message[i];

        // Check if the character is a letter
        if (char.match(/[a-z]/i)) {
            // Determine the case (uppercase or lowercase)
            let isUpperCase = char === char.toUpperCase();

            // Convert the character to uppercase for easier manipulation
            char = char.toUpperCase();

            // Apply the Caesar Cipher shift
            let charCode = char.charCodeAt(0);
            let shiftedCharCode = ((charCode - 65 + shift) % 26 + 26) % 26 + 65;

            // Convert back to the original case
            if (!isUpperCase) {
                shiftedCharCode += 32;
            }

            encryptedMessage += String.fromCharCode(shiftedCharCode);
        } else {
            // If the character is not a letter, leave it unchanged
            encryptedMessage += char;
        }
    }

    return encryptedMessage;
}

// Ask the user to enter a message
let userMessage = prompt("Enter a message to encrypt:");

// Ask the user to enter a shift number
let shiftAmount = prompt("Enter the shift number:");

// Convert the shift input to a number
shiftAmount = parseInt(shiftAmount);

// Call the caesarCipher function and display the encrypted message
let encryptedMessage = caesarCipher(userMessage, shiftAmount);
console.log("Encrypted Message: " + encryptedMessage);

/* 

Challenge: Guess the number
Level: Beginner
Description: This challenge involves creating a program that generates a random number and asks the user to guess that number. The goal is for the user to find the correct number in the fewest possible attempts.

Instructions:
1. The program must generate a random number between 1 and 10 and store it in a variable.
2. Ask the user to enter a number.
3. Compare the number entered by the user with the randomly generated number.
4. If the number entered is equal to the number generated, it displays a congratulations message and ends the program.
5. If the entered number is greater than the generated number, displays a message indicating that the number to be guessed is less and allows the user to enter another number.
6. If the entered number is less than the generated number, displays a message indicating that the number to be guessed is greater and allows the user to enter another number.
7. Repeat steps 2 to 6 until the user guesses the correct number.

You can use the Math.random() function to generate the random number and the prompt() and console.log() functions to interact with the user.

Good luck!
 
*/

// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Initialize the number of attempts
let attempts = 0;

// Game loop
while (true) {
    // Ask the user to enter a number
    let userGuess = prompt("Guess the number (between 1 and 10):");

    // Convert the input to a number
    userGuess = parseInt(userGuess);

    // Increment the number of attempts
    attempts++;

    // Compare the user's guess with the random number
    if (userGuess === randomNumber) {
        console.log("Congratulations! You guessed the correct number in " + attempts + " attempts.");
        break; // End the program
    } else if (userGuess > randomNumber) {
        console.log("Too high. Try again.");
    } else {
        console.log("Too low. Try again.");
    }
}

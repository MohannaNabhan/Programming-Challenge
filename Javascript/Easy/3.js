// Challenge: Vowel Counter
// Level: Beginner
// Description: This challenge involves creating a program that counts the number of vowels in a sentence entered by the user.

// Instructions:
// 1. Ask the user to enter a sentence.
// 2. Create a variable to store the count of vowels, initializing it to 0.
// 3. Using a for loop, iterate through each letter of the sentence.
// 4. Within the loop, check if the current letter is a vowel (a, e, i, o, u) in lowercase or uppercase.
// 5. If the letter is a vowel, increment the variable counting the vowels by 1.
// 6. After finishing the loop, display the count of vowels found in the console.

// You can use the prompt() function to get user input and alert() or console.log() to display the result.

// Good luck!

// Ask the user to enter a sentence
let userSentence = prompt("Enter a sentence:");

// Create a variable to store the count of vowels, initializing it to 0
let vowelCount = 0;

// Using a for loop, iterate through each letter of the sentence
for (let i = 0; i < userSentence.length; i++) {
    // Check if the current letter is a vowel (a, e, i, o, u) in lowercase or uppercase
    let currentLetter = userSentence[i].toLowerCase();
    
    if (currentLetter === 'a' || currentLetter === 'e' || currentLetter === 'i' || currentLetter === 'o' || currentLetter === 'u') {
        // If the letter is a vowel, increment the variable counting the vowels by 1
        vowelCount++;
    }
}

// Display the count of vowels found in the console
console.log("The number of vowels in the sentence is: " + vowelCount);

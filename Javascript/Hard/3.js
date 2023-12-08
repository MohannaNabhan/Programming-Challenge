// Challenge: Find the Longest Word in a Sentence
// Level: Difficult
// Description: This challenge involves creating a program that finds the longest word in a sentence entered by the user.

// Instructions:
// 1. Ask the user to enter a sentence.
// 2. Create a function that takes the sentence as an argument.
// 3. Inside the function, split the sentence into words using the split(' ') method.
// 4. Create a variable to store the maximum length of a word and another variable to store the longest word.
// 5. Iterate through all the words, and for each word, check if its length is greater than the stored maximum length. If so, update the maximum length and the longest word.
// 6. At the end of the loop, return the longest word found.

// Example:
// Sentence: "The house is very large"
// Longest Word: "large"

// Function to find the longest word in a sentence
function findLongestWord(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');

    // Variables to store the maximum length and the longest word
    let maxLength = 0;
    let longestWord = "";

    // Iterate through all words
    for (let word of words) {
        // Check if the length of the word is greater than the maximum length
        if (word.length > maxLength) {
            // Update the maximum length and the longest word
            maxLength = word.length;
            longestWord = word;
        }
    }

    // Return the longest word found
    return longestWord;
}

// Example usage:
let userSentence = prompt("Enter a sentence:");
let result = findLongestWord(userSentence);

if (result !== "") {
    console.log("Longest Word: " + result);
} else {
    console.log("No words found in the sentence.");
}

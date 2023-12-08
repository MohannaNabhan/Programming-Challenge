// Challenge: Palindrome Checker
// Level: Intermediate
// Description: This challenge involves creating a program that checks if a word or phrase is a palindrome.

// Instructions:
// 1. Ask the user to enter a word or phrase.
// 2. Create a function that takes the word or phrase as an argument.
// 3. Within the function, remove any non-alphabetic characters and convert the word or phrase to lowercase.
// 4. Compare the original word or phrase with its reversed version.
// 5. If the two versions are the same, the word or phrase is a palindrome. Otherwise, it's not a palindrome.
// 6. Display the result to the user.

// Good luck checking palindromes!

// Function to check if a word or phrase is a palindrome
function isPalindrome(input) {
    // Remove non-alphabetic characters and convert to lowercase
    const cleanInput = input.replace(/[^a-zA-Z]/g, '').toLowerCase();
    
    // Compare the original input with its reversed version
    return cleanInput === cleanInput.split('').reverse().join('');
}

// Ask the user to enter a word or phrase
let userInput = prompt("Enter a word or phrase:");

// Call the isPalindrome function and display the result
if (isPalindrome(userInput)) {
    alert("It's a palindrome!");
} else {
    alert("It's not a palindrome.");
}

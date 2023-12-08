<?php
// Challenge: Check if a Word is a Palindrome
// Level: Beginner
// Description: This challenge involves creating a PHP function that checks if a word is a palindrome, meaning it reads the same forwards and backwards.

// Instructions:
// 1. Create a function called is_palindrome that takes a word as a parameter.
// 2. Inside the function, use the strrev() function to reverse the word.
// 3. Compare the original word with the reversed word using the strcasecmp() function to ignore case differences.
// 4. If the words are equal, return true, indicating that the word is a palindrome. Otherwise, return false.

// Example:
// Word: "reconocer"
// Is a palindrome: true

// Function to check if a word is a palindrome
function is_palindrome($word) {
    // Reverse the word using strrev
    $reversed_word = strrev($word);

    // Compare the original word with the reversed word, ignoring case differences
    return strcasecmp($word, $reversed_word) === 0;
}

// Example usage:
$userWord = readline("Enter a word: ");
$isPalindrome = is_palindrome($userWord);

if ($isPalindrome) {
    echo "Is a palindrome: true\n";
} else {
    echo "Is a palindrome: false\n";
}
?>

<?php
// Challenge: Find the Longest Word in a Sentence
// Level: Intermediate
// Description: This challenge involves creating a PHP function that finds the longest word in a given sentence.

// Instructions:
// 1. Create a function called find_longest_word that takes a sentence as a parameter.
// 2. Inside the function, use the explode() function to split the sentence into an array of words.
// 3. Initialize a variable called longest_word with the value of the first word in the array.
// 4. Use a foreach loop to iterate over the array of words.
// 5. In each iteration, compare the length of the current word with the length of longest_word.
// 6. If the length of the current word is greater, update the value of longest_word with the current word.
// 7. At the end of the loop, longest_word will contain the longest word in the sentence.
// 8. Return the value of longest_word.

// Example:
// Sentence: "The house is very beautiful"
// Longest word: "beautiful"

// Function to find the longest word in a sentence
function find_longest_word($sentence) {
    $words = explode(' ', $sentence);
    $longest_word = $words[0];

    foreach ($words as $word) {
        if (strlen($word) > strlen($longest_word)) {
            $longest_word = $word;
        }
    }

    return $longest_word;
}

// Example usage:
$sentence = "The house is very beautiful";
$result = find_longest_word($sentence);
echo "Sentence: \"$sentence\"\n";
echo "Longest word: \"$result\"\n";
?>

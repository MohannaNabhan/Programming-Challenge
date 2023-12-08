<?php
// Challenge: Check if a Word or Phrase is a Palindrome
// Level: Intermediate
// Description: This challenge involves creating a PHP function that checks if a word or phrase is a palindrome, i.e., if it reads the same forwards and backwards.

// Instructions:
// 1. Create a function called is_palindrome that takes a text string as a parameter.
// 2. Inside the function, remove whitespaces and convert the string to lowercase using the str_replace() and strtolower() functions.
// 3. Initialize two variables, start and end, at the ends of the string (start = 0, end = length of the string - 1).
// 4. Use a while loop to compare the characters at positions start and end.
// 5. If the characters are different, return false, indicating that the string is not a palindrome.
// 6. If the characters are the same, increment start and decrement end to continue comparing the next characters.
// 7. If start is greater than or equal to end, it means that all characters have been compared, and the string is a palindrome, so return true.
// 8. Return the result of the function.

// Example:
// Palindrome: "Anita lava la tina"
// Result: true

// Function to check if a word or phrase is a palindrome
function is_palindrome($text) {
    $text = strtolower(str_replace(' ', '', $text));
    $start = 0;
    $end = strlen($text) - 1;

    while ($start < $end) {
        if ($text[$start] !== $text[$end]) {
            return false;
        }

        $start++;
        $end--;
    }

    return true;
}

// Example usage:
$phrase = "Anita lava la tina";
$result = is_palindrome($phrase);
echo "Palindrome: \"$phrase\"\n";
echo "Result: " . ($result ? 'true' : 'false') . "\n";
?>

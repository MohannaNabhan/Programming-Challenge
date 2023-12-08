<?php
// Challenge: Find the Longest Substring Without Repeating Characters in a Given String
// Level: Difficult
// Description: This challenge involves creating a PHP function that finds the longest substring in a given string without repeating characters.

// Instructions:
// 1. Create a function called encontrar_subcadena_sin_repetir that takes a string as a parameter.
// 2. Inside the function, initialize a variable called subcadena_actual with an empty string.
// 3. Initialize a variable called subcadena_mas_larga with an empty string.
// 4. Use a for loop to iterate over each character of the string.
// 5. In each iteration, check if the current character is already present in subcadena_actual.
// 6. If it is not present, add the character to subcadena_actual.
// 7. If it is present, compare the length of subcadena_actual with the length of subcadena_mas_larga.
// 8. If the length of subcadena_actual is greater, update the value of subcadena_mas_larga with the value of subcadena_actual.
// 9. Reset subcadena_actual with the current character.
// 10. At the end of the loop, subcadena_mas_larga will contain the longest substring without repeating characters.
// 11. Return the value of subcadena_mas_larga.

// Function to find the longest substring without repeating characters
function encontrar_subcadena_sin_repetir($cadena) {
    // Initialize variables for the current substring and the longest substring
    $subcadena_actual = '';
    $subcadena_mas_larga = '';

    // Iterate over each character in the string
    for ($i = 0; $i < strlen($cadena); $i++) {
        // Check if the current character is already in the current substring
        $pos = strpos($subcadena_actual, $cadena[$i]);

        if ($pos === false) {
            // If not present, add the character to the current substring
            $subcadena_actual .= $cadena[$i];
        } else {
            // If present, compare lengths and update the longest substring
            if (strlen($subcadena_actual) > strlen($subcadena_mas_larga)) {
                $subcadena_mas_larga = $subcadena_actual;
            }

            // Reset the current substring with the current character
            $subcadena_actual = substr($subcadena_actual, $pos + 1) . $cadena[$i];
        }
    }

    // Check the final substring against the longest substring
    if (strlen($subcadena_actual) > strlen($subcadena_mas_larga)) {
        $subcadena_mas_larga = $subcadena_actual;
    }

    // Return the longest substring without repeating characters
    return $subcadena_mas_larga;
}

// Example usage:
$userString = readline("Enter a string: ");
$longestSubstring = encontrar_subcadena_sin_repetir($userString);

echo "Longest Substring without Repeating Characters: $longestSubstring\n";
?>

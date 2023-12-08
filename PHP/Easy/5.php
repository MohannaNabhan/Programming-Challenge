<?php
// Challenge: Find the Largest Number in an Array
// Level: Beginner
// Description: This challenge involves creating a PHP function that finds the largest number within a given array.

// Instructions:
// 1. Create a function called encontrar_numero_mayor that takes an array of numbers as a parameter.
// 2. Inside the function, use the max() function to get the largest number from the array.
// 3. Return the value of the largest number.

// Example:
// Array: [10, 5, 8, 15, 3]
// Largest Number: 15

// Function to find the largest number in an array
function encontrar_numero_mayor($numbers) {
    // Use the max() function to find the largest number
    $maxNumber = max($numbers);

    // Return the largest number
    return $maxNumber;
}

// Example usage:
$userArray = explode(',', readline("Enter numbers separated by commas: "));
$userArray = array_map('intval', $userArray); // Convert input values to integers

$largestNumber = encontrar_numero_mayor($userArray);

echo "Largest Number: $largestNumber\n";
?>

<?php
// Challenge: Find the Missing Number in an Array of Consecutive Numbers
// Level: Difficult
// Description: This challenge involves creating a PHP function that finds the missing number in an array of consecutive numbers, where all numbers are present except one.

// Instructions:
// 1. Create a function called encontrar_numero_faltante that takes an array of consecutive numbers as a parameter.
// 2. Inside the function, use the array_sum() function to get the sum of all numbers in the array.
// 3. Calculate the expected sum of consecutive numbers using the formula: (n * (n + 1)) / 2, where n is the count of numbers in the array plus 1.
// 4. Subtract the expected sum from the sum obtained in the previous step to find the missing number.
// 5. Return the missing number.

// Example:
// Array: [1, 2, 3, 4, 6, 7, 8, 9, 10]
// Missing Number: 5

// Function to find the missing number in an array of consecutive numbers
function encontrar_numero_faltante($numbers) {
    // Calculate the sum of all numbers in the array
    $sum = array_sum($numbers);

    // Calculate the expected sum of consecutive numbers
    $expectedSum = count($numbers) * (count($numbers) + 1) / 2;

    // Find the missing number by subtracting the expected sum from the actual sum
    $missingNumber = $expectedSum - $sum;

    // Return the missing number
    return $missingNumber;
}

// Example usage:
$userArray = explode(',', readline("Enter consecutive numbers separated by commas: "));
$userArray = array_map('intval', $userArray); // Convert input values to integers

$missingNumber = encontrar_numero_faltante($userArray);

echo "Missing Number: $missingNumber\n";
?>

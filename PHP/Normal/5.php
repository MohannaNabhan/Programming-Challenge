<?php
// Challenge: Find Duplicate Numbers in an Array
// Level: Intermediate
// Description: This challenge involves creating a PHP function that finds duplicate numbers within a given array.

// Instructions:
// 1. Create a function called encontrar_numeros_duplicados that takes an array of numbers as a parameter.
// 2. Inside the function, use the array_count_values() function to count the number of times each number repeats in the array.
// 3. Use a foreach loop to iterate over the counts array.
// 4. In each iteration, check if the count is greater than 1.
// 5. If so, add the number to the duplicated_numbers array.
// 6. At the end of the loop, duplicated_numbers will contain the duplicated numbers from the original array.
// 7. Return the duplicated_numbers array.

// Example:
// Array: [1, 2, 3, 2, 4, 3, 5, 6, 4]
// Duplicated Numbers: [2, 3, 4]

// Function to find duplicate numbers
function encontrar_numeros_duplicados($numbers) {
    $counts = array_count_values($numbers);
    $duplicated_numbers = [];

    foreach ($counts as $number => $count) {
        if ($count > 1) {
            $duplicated_numbers[] = $number;
        }
    }

    return $duplicated_numbers;
}

// Example usage:
$numbers = [1, 2, 3, 2, 4, 3, 5, 6, 4];
$duplicatedNumbers = encontrar_numeros_duplicados($numbers);
echo "Array: [" . implode(", ", $numbers) . "]\n";
echo "Duplicated Numbers: [" . implode(", ", $duplicatedNumbers) . "]\n";
?>

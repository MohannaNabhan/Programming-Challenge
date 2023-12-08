<?php
// Challenge: Find the Largest Number in a Multidimensional Array
// Level: Difficult
// Description: This challenge involves creating a PHP function that finds the largest number in a multidimensional array.

// Instructions:
// 1. Create a function called find_largest_number that takes a multidimensional array as a parameter.
// 2. Inside the function, initialize a variable called largest_number with the value of the first element in the array.
// 3. Use a foreach loop to iterate over each element of the multidimensional array.
// 4. In each iteration, check if the current element is greater than largest_number.
// 5. If so, update the value of largest_number with the value of the current element.
// 6. At the end of the loop, return largest_number.

// Example:
// Multidimensional array: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Largest number: 9

// Function to find the largest number in a multidimensional array
function find_largest_number($multidimensional_array) {
    // Initialize the largest number with the value of the first element
    $largest_number = $multidimensional_array[0][0];

    // Iterate over each element of the multidimensional array
    foreach ($multidimensional_array as $row) {
        foreach ($row as $element) {
            // Check if the current element is greater than the current largest number
            if ($element > $largest_number) {
                // Update the value of the largest number
                $largest_number = $element;
            }
        }
    }

    // Return the largest number
    return $largest_number;
}

// Example usage:
$multidimensional_array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

$largest_number = find_largest_number($multidimensional_array);

echo "Largest Number: $largest_number\n";
?>

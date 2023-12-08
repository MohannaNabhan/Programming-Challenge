<?php
// Challenge: Calculate the Factorial of a Number
// Level: Beginner
// Description: This challenge involves creating a PHP function that calculates the factorial of an integer.

// Instructions:
// 1. Create a function called factorial that takes an integer as a parameter.
// 2. Inside the function, initialize a variable result to 1. This variable will store the result of the factorial.
// 3. Use a for loop to iterate from 1 to the entered number.
// 4. In each iteration of the loop, multiply the current value of result by the iteration number.
// 5. At the end of the loop, the result variable will contain the factorial of the number.
// 6. Return the value of result.

// Example:
// Number: 5
// Factorial: 5! = 5 x 4 x 3 x 2 x 1 = 120

// Function to calculate the factorial of a number
function factorial($number) {
    // Initialize a variable to store the factorial result
    $result = 1;

    // Use a for loop to calculate the factorial
    for ($i = 1; $i <= $number; $i++) {
        // Multiply the current result by the iteration number
        $result *= $i;
    }

    // Return the factorial result
    return $result;
}

// Example usage:
$userNumber = readline("Enter an integer: ");
$factorialResult = factorial($userNumber);

echo "Factorial: $userNumber! = $factorialResult\n";
?>

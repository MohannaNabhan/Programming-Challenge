<?php
// Challenge: Calculate the Sum of Digits of an Integer
// Level: Beginner
// Description: This challenge involves creating a PHP function that calculates the sum of the digits of an integer.

// Instructions:
// 1. Create a function called suma_digitos that takes an integer as a parameter.
// 2. Inside the function, initialize a variable suma to 0. This variable will store the sum of the digits.
// 3. Convert the number to a string using the strval() function.
// 4. Iterate through each digit of the string using a for or foreach loop.
// 5. In each iteration of the loop, convert the digit back to an integer using the intval() function and add its value to the suma variable.
// 6. At the end of the loop, the suma variable will contain the sum of the digits of the number.
// 7. Return the value of suma.

// Example:
// Number: 12345
// Sum of digits: 15

// Function to calculate the sum of digits of an integer
function suma_digitos($number) {
    // Initialize a variable to store the sum of digits
    $sum = 0;

    // Convert the number to a string
    $numberStr = strval($number);

    // Iterate through each digit
    for ($i = 0; $i < strlen($numberStr); $i++) {
        // Convert each digit to an integer and add it to the sum
        $sum += intval($numberStr[$i]);
    }

    // Return the sum of digits
    return $sum;
}

// Example usage:
$userNumber = readline("Enter an integer: ");
$digitSum = suma_digitos($userNumber);

echo "Sum of digits: $digitSum\n";
?>

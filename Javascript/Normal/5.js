// Challenge: Prime Number Checker
// Level: Intermediate
// Description: This challenge involves creating a program that checks if a number entered by the user is prime.

// Instructions:
// 1. Ask the user to enter a number.
// 2. Create a function that takes the number as an argument.
// 3. Within the function, check if the number is less than or equal to 1. If so, return false since numbers less than or equal to 1 are not prime.
// 4. Use a loop to check if the number is divisible by any number from 2 up to half of the number. If any divisor is found, return false.
// 5. If the loop finishes without finding any divisor, return true since the number is prime.
// 6. Display the result to the user.

// Good luck checking prime numbers!

// Function to check if a number is prime
function isPrimeNumber(number) {
    // Check if the number is less than or equal to 1
    if (number <= 1) {
        return false;
    }

    // Use a loop to check for divisors
    for (let i = 2; i <= Math.floor(number / 2); i++) {
        if (number % i === 0) {
            // If any divisor is found, the number is not prime
            return false;
        }
    }

    // If the loop finishes without finding a divisor, the number is prime
    return true;
}

// Ask the user to enter a number
let userNumber = prompt("Enter a number:");

// Convert the input to a number
userNumber = parseInt(userNumber);

// Call the isPrimeNumber function and display the result
if (isPrimeNumber(userNumber)) {
    alert("It's a prime number!");
} else {
    alert("It's not a prime number.");
}

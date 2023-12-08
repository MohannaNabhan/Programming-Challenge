// Challenge: Find the Missing Number in an Array
// Level: Difficult
// Description: This challenge involves creating a program that finds the missing number in an array of consecutive numbers, where all numbers except one are present.

// Instructions:
// 1. Create a function that takes an array of numbers as an argument.
// 2. Inside the function, sort the array in ascending order.
// 3. Use a loop to iterate through the array and check if the next number is equal to the current number plus 1. If not, return the current number plus 1, as that is the missing number in the array.
// 4. If the loop finishes without finding any missing number, return null or a message indicating that no missing number was found.

// Example:
// Array: [1, 2, 3, 5, 6, 7, 8]
// Missing Number: 4

// Function to find the missing number in an array
function findMissingNumber(arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // Iterate through the array to find the missing number
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 !== arr[i + 1]) {
            // If the next number is not the current number plus 1, return the missing number
            return arr[i] + 1;
        }
    }

    // If no missing number is found, return null or a message indicating that no missing number was found
    return null;
}

// Example usage:
let inputArray = [1, 2, 3, 5, 6, 7, 8];
let missingNumber = findMissingNumber(inputArray);

if (missingNumber !== null) {
    console.log("Missing Number: " + missingNumber);
} else {
    console.log("No missing number found in the array.");
}

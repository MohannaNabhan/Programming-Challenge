<?php
// Challenge: Validate an Email Address
// Level: Intermediate
// Description: This challenge involves creating a PHP function that validates whether an email address is valid or not.

// Instructions:
// 1. Create a function called validate_email that takes an email address as a parameter.
// 2. Inside the function, use the filter_var() function with the FILTER_VALIDATE_EMAIL filter to validate the email address.
// 3. Return true if the email address is valid, or false otherwise.

// Example:
// Email Address: example@example.com
// Result: true

// Function to validate an email address
function validate_email($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

// Example usage:
$emailAddress = "example@example.com";
$result = validate_email($emailAddress);
echo "Email Address: $emailAddress\n";
echo "Result: " . ($result ? 'true' : 'false') . "\n";
?>

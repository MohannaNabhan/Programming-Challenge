<?php
// Challenge: Convert CamelCase to snake_case
// Level: Intermediate
// Description: This challenge involves creating a PHP function that converts a CamelCase formatted string to snake_case.

// Instructions:
// 1. Create a function called convert_camel_to_snake that takes a CamelCase formatted string as a parameter.
// 2. Inside the function, use the preg_replace_callback() function to replace each uppercase letter with its lowercase counterpart preceded by an underscore.
// 3. Return the string converted to snake_case.

// Example:
// CamelCase formatted string: "HelloWorldExample"
// snake_case formatted string: "hello_world_example"

// Function to convert CamelCase to snake_case
function convert_camel_to_snake($camelCaseString) {
    return preg_replace_callback('/[A-Z]/', function ($matches) {
        return '_' . strtolower($matches[0]);
    }, $camelCaseString);
}

// Example usage:
$camelCaseString = "HelloWorldExample";
$result = convert_camel_to_snake($camelCaseString);
echo "CamelCase formatted string: \"$camelCaseString\"\n";
echo "snake_case formatted string: \"$result\"\n";
?>

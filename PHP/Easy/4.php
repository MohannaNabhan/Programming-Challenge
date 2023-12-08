<?php
// Challenge: Calculate the Area of a Triangle
// Level: Beginner
// Description: This challenge involves creating a PHP function that calculates the area of a triangle given its base and height.

// Instructions:
// 1. Create a function called calcular_area_triangulo that takes the base and height of the triangle as parameters.
// 2. Inside the function, multiply the base by the height and divide the result by 2 to obtain the area.
// 3. Return the value of the area.

// Example:
// Base: 5
// Height: 8
// Area: 20

// Function to calculate the area of a triangle
function calcular_area_triangulo($base, $height) {
    // Calculate the area using the formula: (base * height) / 2
    $area = ($base * $height) / 2;

    // Return the calculated area
    return $area;
}

// Example usage:
$userBase = readline("Enter the base of the triangle: ");
$userHeight = readline("Enter the height of the triangle: ");

// Convert input values to floats for calculations
$userBase = floatval($userBase);
$userHeight = floatval($userHeight);

$triangleArea = calcular_area_triangulo($userBase, $userHeight);

echo

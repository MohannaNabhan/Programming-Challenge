<?php
// Challenge: Find the Minimum Number of Coins to Make Change in a Given Monetary System
// Level: Difficult
// Description: This challenge involves creating a PHP function that finds the minimum number of coins needed to make change in a given monetary system.

// Instructions:
// 1. Create a function called calcular_cambio_minimo that takes parameters for the change value and an array of available coin values.
// 2. Inside the function, initialize a variable called cantidad_monedas with a very large value, for example, PHP_INT_MAX.
// 3. Use a for loop to iterate over each coin value in the array.
// 4. In each iteration, check if the coin value is less than or equal to the change value.
// 5. If so, subtract the coin value from the change value and increment a coin count.
// 6. Call the calcular_cambio_minimo function recursively with the updated change value and the same array of coin values.
// 7. In each recursive call, compare the coin count with cantidad_monedas.
// 8. If the coin count is less than cantidad_monedas, update the value of cantidad_monedas with the coin count.
// 9. At the end of the loop, return cantidad_monedas.

// Example:
// Change value: 11
// Monetary system: [1, 2, 5]
// Minimum number of coins: 3 (2 coins of 5 and 1 coin of 1)

// Function to find the minimum number of coins to make change
function calcular_cambio_minimo($cambio, $monedas) {
    // Initialize the coin count with a large value
    $cantidad_monedas = PHP_INT_MAX;

    // Iterate over each coin value
    foreach ($monedas as $moneda) {
        // Check if the coin value is less than or equal to the change value
        if ($moneda <= $cambio) {
            // Subtract the coin value from the change value
            $cambio_actualizado = $cambio - $moneda;

            // Increment the coin count
            $contador_monedas = 1;

            // Recursive call to calculate the minimum coins for the updated change value
            $contador_monedas += calcular_cambio_minimo($cambio_actualizado, $monedas);

            // Update the minimum coin count
            $cantidad_monedas = min($cantidad_monedas, $contador_monedas);
        }
    }

    // Return the minimum number of coins
    return $cantidad_monedas;
}

// Example usage:
$cambio_a_dar = intval(readline("Enter the change value: "));
$sistema_monetario = array_map('intval', explode(',', readline("Enter the coin values separated by commas: ")));

$minimo_monedas = calcular_cambio_minimo($cambio_a_dar, $sistema_monetario);

echo "Minimum Number of Coins: $minimo_monedas\n";
?>

def fibonacci_en_posicion(posicion):
    if posicion <= 0:
        return "La posición debe ser un número entero positivo."

    fib_previo, fib_actual = 0, 1

    for _ in range(2, posicion + 1):
        fib_previo, fib_actual = fib_actual, fib_previo + fib_actual

    return fib_actual

# Solicitar al usuario la posición en la secuencia de Fibonacci
posicion = int(input("Ingrese la posición en la secuencia de Fibonacci: "))

# Encontrar y mostrar el número de Fibonacci en la posición especificada
resultado = fibonacci_en_posicion(posicion)
print(f"Número de Fibonacci en la posición {posicion}: {resultado}")

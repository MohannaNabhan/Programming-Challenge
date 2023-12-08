def es_palindromo(palabra):
    palabra = palabra.lower()
    palabra_invertida = ''.join(reversed(palabra))
    return palabra == palabra_invertida

# Solicitar al usuario que ingrese una palabra
palabra_usuario = input("Ingrese una palabra: ")

# Verificar si la palabra es un palíndromo
resultado = es_palindromo(palabra_usuario)

# Mostrar el resultado
print(f"La palabra '{palabra_usuario}' es un palíndromo: {resultado}")

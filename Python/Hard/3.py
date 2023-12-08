def es_palindromo(palabra):
    palabra = palabra.lower()
    return palabra == palabra[::-1]

def contar_palindromas(texto):
    palabras = texto.split()
    contador = 0

    for palabra in palabras:
        if es_palindromo(palabra):
            contador += 1

    return contador

# Solicitar al usuario ingresar un texto
texto = input("Ingrese un texto: ")

# Contar y mostrar el número de palabras palíndromas en el texto
resultado = contar_palindromas(texto)
print(f"Número de palabras palíndromas: {resultado}")

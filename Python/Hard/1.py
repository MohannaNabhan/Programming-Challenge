def encontrar_numeros_de_la_suerte(inicio, fin):
    numeros_de_la_suerte = []

    for numero in range(inicio, fin + 1):
        if '7' in str(numero) and numero % 7 == 0:
            numeros_de_la_suerte.append(numero)

    return numeros_de_la_suerte

# Solicitar al usuario el rango de números
inicio_rango = int(input("Ingrese el número inicial del rango: "))
fin_rango = int(input("Ingrese el número final del rango: "))

# Encontrar los números de la suerte
numeros_suerte_encontrados = encontrar_numeros_de_la_suerte(inicio_rango, fin_rango)

# Mostrar los resultados
print("Números de la suerte encontrados:", numeros_suerte_encontrados)
print("Total de números de la suerte encontrados:", len(numeros_suerte_encontrados))

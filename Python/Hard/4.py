def encontrar_numero_faltante(lista):
    numero_faltante = 1

    for i in range(1, max(lista) + 2):
        if i not in lista:
            numero_faltante = i
            break

    return numero_faltante

# Solicitar al usuario ingresar una lista de números
numeros = list(map(int, input("Ingrese una lista de números separados por espacio: ").split()))

# Encontrar y mostrar el número más pequeño que no se encuentra en la lista
resultado = encontrar_numero_faltante(numeros)
print(f"Número más pequeño que no se encuentra en la lista: {resultado}")

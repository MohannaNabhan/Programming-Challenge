# Desafío: Contar la cantidad de vocales en una palabra
# Nivel: Principiante
# Descripción: Este desafío consiste en crear un programa que cuente la cantidad de vocales en una palabra ingresada por el usuario.

# Función para contar la cantidad de vocales en una palabra
def contar_vocales(palabra):
    # Inicializar la variable para almacenar la cantidad de vocales
    cantidad_vocales = 0
    
    # Convertir la palabra a minúsculas para simplificar la verificación
    palabra = palabra.lower()
    
    # Recorrer cada letra de la palabra
    for letra in palabra:
        # Verificar si la letra es una vocal
        if letra in ['a', 'e', 'i', 'o', 'u']:
            # Incrementar la cantidad de vocales
            cantidad_vocales += 1
    
    # Devolver la cantidad de vocales encontradas
    return cantidad_vocales

# Pedir al usuario que ingrese una palabra
palabra_usuario = input("Ingresa una palabra: ")

# Calcular la cantidad de vocales llamando a la función
resultado = contar_vocales(palabra_usuario)

# Mostrar el resultado
print(f"Cantidad de vocales: {resultado}")

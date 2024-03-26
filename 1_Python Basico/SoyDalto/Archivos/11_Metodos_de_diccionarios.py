#Creamos un diccionario
diccionario = {
    "Nombre": "Nahuel",
    "Edad": 22,
    "Vivo": True
}

#Obtenemos las claves
claves = diccionario.keys()
print(f"Keys: {claves}")

#Obtenemos los valores
valores = diccionario.values()
print(f"Values: {valores}")

#Obtenemos el valor de un key
contenido = diccionario.get("Nombre")
print(f"Contenido: {contenido}")

#Eliminar un elemento del diccionario
diccionario.pop("Nombre")
print(f"Pop: {diccionario}")

diccionario = {
    "Nombre": "Nahuel",
    "Edad": 22,
    "Vivo": True
}

#Eliminar varios elementos del diccionario
diccionario.pop("Nombre", "Edad")
print(f"Pop: {diccionario}")

diccionario = {
    "Nombre": "Nahuel",
    "Edad": 22,
    "Vivo": True
}

#Eliminar todos los datos del diccionario
limpio = diccionario.clear()
print(f"Clear: {limpio}")
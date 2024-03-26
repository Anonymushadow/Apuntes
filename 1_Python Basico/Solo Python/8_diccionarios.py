#los diccionarios tienen una clave y un valor, 
# es como un array pero en vez de buscar lista[posicion], se usa de este modo listas[key]
mi_diccionario = {"llave1": "Valor 1", "llave2": "Valor 2", "llave3": "Valor 3", "llave4": "Valor 4", "llave5": "Valor 5"}
print(mi_diccionario["llave3"])

diccionario = {"colores": ["rojo", "Azul", "Amarillo"], "Precio": "12", "Nombre": "Nahuel"}
print(diccionario["colores"][1])

#añadir al diccionario
diccionario["llave6"] = "Valor 6"
print(diccionario)

print(diccionario.keys())
print(diccionario.values())
print(diccionario.items())
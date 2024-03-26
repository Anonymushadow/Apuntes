#Creamos un diciconario Metodo 1
diccionario = {
    "Nombre": "Nahuel",
    "Edad": 22,
    "Esta Vivo": True
}

#Creamos un diciconario Metodo 2
diccionario = dict(nombre="Nahuel", edad=22, esta_vivo=True)

#Creamos un diciconario Metodo 3 (todos los values son none) --> el 1er elemento lo itera y lo pone como keys y el segundo como values
diccionario = dict.fromkeys(["Nombre", "Edad", "Esta_vivo"])
print(diccionario)

#Creamos un diciconario Metodo 3 (todos los values son x none)
diccionario = dict.fromkeys(["Nombre", "Edad", "Esta_vivo"], "x")
print(diccionario)
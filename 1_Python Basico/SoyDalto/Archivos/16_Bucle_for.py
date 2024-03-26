animales = ["Perro", "Gato", "Loro", "Ave"]
numeros = [1, 2, 3, 4]

#recorremos la lista animales y cada elemento lo guardamos en una variable llamada animal
for animal in animales:
    print(animal)
    
#For anidado --> iterar en dos listas al mismo tiempo
for numero, animal in zip(numeros, animales):
    print(f"{numero}: {animal}")
    
#utilizar rangos
for numero in range(2, 22):
    print(numero)
    
#recorrer lista y añadirle un indice (el else se ejecuta si o si en un for una vez que acabe el for)
for num in enumerate(numeros):
    print(num)
else:
    print("La Lista Acabo")
    
    
#Iterar diccionario
diccionario = {
    "Nombre": "Nahuel",
    "Edad": 22,
    "Esta vivo?": True
}

for data in diccionario.items():
    print(data)
    
    
#Saltear datos 
frutas = ["Banana", "Manzana", "Uva", "Pera", "Durazno"]

for fruta in frutas:
    if fruta == "Pera":
        break #termina el programa
    elif fruta == "Manzana":
        continue #saltea esta iteracion, esta vuelta
    else:
        print(fruta)
    
#For en una linea unica
numeros_duplicados = [x*2 for x in numeros]  #ponemos la cuenta matematica y despues el for sin contenido
print(numeros_duplicados)

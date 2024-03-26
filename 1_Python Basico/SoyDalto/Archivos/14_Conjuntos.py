
#Tuplas --> es mas optimo si es solo para leer, las listas para datos modificables

#Crear tupla Metodo 1
tupla = tuple(["Dato 1", "Dato 2"])
print(tupla)


#Crear tupla Metodo 2
tupla = ("Dato 1", "Dato 2")
print(tupla)


#Crear tupla Metodo 3
tupla = "Dato 1", "Dato 2"
print(tupla)


#Sets / Conjunto
#Creamos un conjunto de datos no modificable y no acepta datos repetidos, no los muestra
conjunto = {"Nahuel", 22, True, "Masculino", 22}

#Conjunto Metodo 2
conjunto = set(["Nombre 1", "Nombre 2"])
print(conjunto)

#Conjunto dentro de conjunto / conjunto congelado --> inmutable, no se puede modificar
conjunto = frozenset(["Dato 1", "Dato 2"])
conjunto2 = {conjunto, "Dato 3", "Dato 4"}


#Subconjuntos y Superconjuntos
conjunto1 = {2, 6, 4, 9, 0}
conjunto2 = {2, 4, 9}

print(f"conjunto 1, es un subconjunto de conjunto 2?: {conjunto1.issubset(conjunto2)}")
print(f"conjunto 2, es un subconjunto de conjunto 1?: {conjunto2.issubset(conjunto1)}")

print(f"conjunto 1, es un superconjunto de conjunto 2?: {conjunto1.issuperset(conjunto2)}")
print(f"conjunto 2, es un superconjunto de conjunto 1?: {conjunto2.issuperset(conjunto1)}")

#Verificamos que no hayan coincidencias
print(f"Son totalmente desiguales sin ningun numero ni nada en comun?: {conjunto2.isdisjoint(conjunto1)}")
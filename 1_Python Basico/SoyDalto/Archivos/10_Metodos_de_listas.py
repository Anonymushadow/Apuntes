#Crear una lista
lista = list(["Hola", "Nahuel", 22])
print(f"List: {lista}")

#Contar caracteres
caracteres = len(lista)
print(f"Len: {caracteres}")

#Añadir elemento a la lista al final (Append)
lista.append("Append")
print(f"Append: {lista}")

#Añadir elemento a la lista en un indice especifico (Insert)
lista.insert(2, "Insert")
print(f"Insert: {lista}")

#Añadir varios elementos a la lista (Extend)
lista.extend(["Extend", "Extend 2", "Extend 3"])
print(f"Extend: {lista}")

#Eliminar elemento de la lista en un indice especifico (si ponemos -1 nos elimina el ultimo de la lista)
lista.pop(0) #Eliminar el primero elemento
lista.pop(-1) # Eliminar el ultimo elemento
print(f"Pop: {lista}")

#Eliminar elemento de la lista por su valor
lista.remove("Extend 2") #Remueve "Extend 2" si existe, si no tira error
print(f"Remove: {lista}")

#Ordenar de menor a mayor
lista_numerica = [2, 56, 4, 6, 0, 8, 89, 3, 0, True, False]
lista_numerica.sort()
print(f"Sort: {lista_numerica}")

#Ordenar de mayor a menor
lista_numerica.sort(reverse=True)
print(f"Sort Reverse: {lista_numerica}")

#Invertir los elementos
print(f"Sin Reverse: {lista}")
lista.reverse()
print(f"Reverse: {lista}")

#Eliminar todos los elementos de la lista
lista.clear()
print(f"Clear: {lista}")

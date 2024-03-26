mi_lista = [1, 2, 3 ,4, "cinco"]
mi_lista_dos = [6, 7, "ocho"]
print(mi_lista)
#longitud de la lista
agregado = len(mi_lista) 
print(f"Longitud: {agregado}")
agregado = mi_lista[0]
print(f"Posicion 0: {agregado}")
agregado = mi_lista[0:2]
print(f"De 0 a 2: {agregado}" )
#concatenar dos listas
agregado = mi_lista + mi_lista_dos
print(f"Concatenacion de listas: {agregado}")
lista_tres = mi_lista + mi_lista_dos
agregado = lista_tres
print(f"Concatenacion de listas: {agregado}")
#cambiar un valor de la lista
lista_tres[0] = "Eric"
agregado = lista_tres
print(f"Posicion 0 modificada: {agregado}")
#agregar a la lista
lista_tres.append("Agregado")
agregado = lista_tres
print(f"Lista con su agregado: {agregado}")
#eliminar de la lista
lista_tres.pop()
agregado = lista_tres
print(f"Lista agregada: {agregado}")
#guardar lo eliminado de la lista
popeado = lista_tres.pop()
agregado = popeado
print(f"Contenido eliminado: {agregado}")
#eliminar un objeto especifico de la lista
lista_tres.pop(2)
agregado = lista_tres
print(f"Lista sin el objeto 2: {agregado}")
#ordenar listas
lista = ["a", "z", "x", "y", "n"]
lista_num = [4, 3, 8, 1, 9, 2, 0]

lista.sort()
agregado =  lista
print(f"Lista ordenada: {agregado}")
lista_num.sort()
agregado = lista_num
print(f"Lista ordenada: {agregado}")
lista.reverse()
agregado = lista
print(f"Lista ordenada en inversa: {agregado}")
lista_num.reverse()
agregado = lista_num
print(f"Lista ordenada en inversa: {agregado}")
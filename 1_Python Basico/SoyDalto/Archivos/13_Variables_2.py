#Desempaquetado --> metodo de añadir datos a una variable

#tupla o lista
datos_tupla = ("Nahuel", 22,  True)
datos_lista = ["Nahuel", 22,  True]

#Variables desempaquetada
nombre, edad, esta_vivo = datos_tupla

print(edad)

nombre, edad, esta_vivo = datos_lista

print(edad)



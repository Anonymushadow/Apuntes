from traceback import print_tb
from sqlalchemy import false, true
#impirtar randint y shuffle de la clase random
from random import randint, shuffle

from sympy import farthest_points

list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9, 7, 3, 5, 8, 4, 5, 3, 3, 2, 6, 3, 4, 3, 4, 4, 3, 3]
#mostrar del elemento 5 al 20
for r in range(5, 20):
    print(r)

contador = 0
palabra = "Hola Mundo"

for letter in palabra:
    print(palabra[contador])
    contador += 1


for word in enumerate(palabra):
    print(word)

for i, word in enumerate(palabra):
    print(i)
    print(word) 

lista_uno = [1, 2, 3]
lista_dos = ["a", "b", "c"]
lista_tres = ["Ana", "Boris", "Carlos"]

for item in zip(lista_uno, lista_dos, lista_tres):
    print(item)

#revisar xque no funciona
#print(list(zip(lista_uno, lista_dos, lista_tres)))

if "a" in lista_dos:
    print("true")
else:
    print("false")

lista_aleatoria = [2, 6, 3, 6, 4, 0, 9, 40, 5, 3, 5, 49, 39, 29, 49, 29, 2, 3]
print(min(lista_aleatoria))
print(max(lista_aleatoria))

listShuffle = [1, 2, 3, 4, 5, 6,7 , 8, 9, 10]
shuffle(listShuffle)
print(listShuffle)

#imprime un numero del 0 al 100 aleatoriamente
print(randint(0, 100))

res = input("Escribe un numero")
print(res)

res = float(res)
print(res)


#aca creas una lista rapidamente
mi_lista = [x for x in range(0, 11)]

celcius = [0, 10, 20, 34.5]
#por cada celcius hace esa cuenta y la imprime
fahrenheit = [((9/5)*temp + 32) for temp in celcius]
print(fahrenheit)
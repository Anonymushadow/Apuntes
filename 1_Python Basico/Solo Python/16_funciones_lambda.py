from tabnanny import check

#La función map() en Python aplica una función a cada uno de los elementos de una lista.
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def square(num):
    result = num**2
    return result

print(list(map(square, numeros)))

#La función filter() filtra una lista de elementos para los que una función devuelve True.
def check_par(num):
    return num % 2 == 0

for n in filter(check_par, numeros):
    print(n) 

#lambda es una funcion corta sin nombre
square = lambda num: num ** 2
print(square(5))

'''
es lo mismo que poner
def elevado(num):
    return num ** 2
'''

print(list(map(lambda num: num ** 2, numeros)))
print(list(filter(lambda num: num % 2 == 0, numeros)))
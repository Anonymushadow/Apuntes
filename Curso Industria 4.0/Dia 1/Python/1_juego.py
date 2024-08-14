import random

numero = random.randint(1, 20)

numeroEscogido = 0

while numeroEscogido != numero:
    print("Su numero es incorrecto")
    numeroEscogido = int(input("Elija un numero del 1 al 20: \n"))


print("Su numero es correcto")

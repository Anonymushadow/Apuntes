#Crear funcion que al pasarle un numero genere todos los primos existentes entre ese numero y el 0

primos = []
no_primos = []
numero = input("Cual es el numero?: ")

def generar_primos(numero):
    for num in range(2, int(numero)):
        valor = True
        count = 2 #iugalo a 2 porque por uno se pueden dividir todos
        while num > count:
            if num % count == 0:
                valor = False
                break
            else:
                count += 1
        if valor == True:
            primos.append(num)
    print(f"Los primos son {primos}")

generar_primos(numero)
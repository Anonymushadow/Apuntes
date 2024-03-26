#Astraccion --> se trata de usar una funcion si nsaber como funciona internamente pero si como y donde usarla
#Funciones build in --> son funciones que son de python ya creadas


#Funciones Build-in
lista = [2, 8, 4, 90, 6, 99, 5, 3, 1212, 34, 5664, 4, 73, 43, 65]


#Numero mas alto
maximo_valor = max(lista)
print(f"Valor mas alto: {maximo_valor}")

#Numero mas bajo
minimo_valor = min(lista)
print(f"Valor mas bajo: {minimo_valor}")

#Redondear con x cantidad de decimales
resultado = 3 / 231
numero = round(resultado, 2) # despues de la coma se pone la cantidad de decimales que queremos que tenga
print(f"Division: {numero}")

#Verificar si el contenido es True o False (False = False, 0, vacio, None)
booleano = 0
contenido = bool(booleano)
print(f"Contenido: {contenido}")

#Verificar si todo su contenido es True
booleano_lista = [1, 4, "OK", True]
contenido_lista = all(booleano_lista)
print(f"Contenido de la lista: {contenido_lista}")

#Sumar todos los numeros
suma = sum(lista)
print(f"Suma: {suma}")
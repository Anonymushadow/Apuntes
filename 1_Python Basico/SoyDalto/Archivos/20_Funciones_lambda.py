#funcion lambda --> funcion sin nombre de una sola linea
#lambda argumentos: expresion


numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
lista = list()

#Sin lambda
def buscar_par(numero):
    for num in numero:
        if num % 2 == 0: 
            lista.append(num)
    return lista

lista = buscar_par(numeros)
print(lista)

#Con lambda
#filter(función_de_filtro, secuencia_iterable) 
lista = filter(lambda num: num % 2 == 0, numeros)
    #filter --> ejecuta una funcion en cada elemento existente en el array
    #num: --> es el parametro que recibe
    #num % 2 --> cada num lo divide por 2 y verifica si su resto es 0
    #numeros --> parametro que le otorgamos
    #si el resto es 0 lo almacena  y una vez recorrido todo lo retorna
    #Las funciones lambda siempre retornan
    
print(list(lista)) #para ver los datos deel filter lo convertimos a lista

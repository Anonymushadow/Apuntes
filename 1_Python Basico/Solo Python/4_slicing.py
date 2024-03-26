micadena = "Hola mundo"
print(micadena[0])
#[-1] --> seleccion de atras para adelante el 1ro (osea la o de mundo)
print(micadena[0])

#Slicing
#print[start:stop:step] 
    #start --> desde que posicion empieza
    #stop --> hasta que indice agarrar
    #stop --> cada cuanto agarrar
print(micadena[0:3:2])
#empieza en h, agarra h, hasta a va a agarrar cada dos caracteres
print(micadena[5:9:1])
print(micadena[::])
#print(micadena[::]) --> desde elinicio hasta el fin
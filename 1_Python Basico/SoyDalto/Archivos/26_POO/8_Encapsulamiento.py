#para indicar que es algo privado se pone el guion bajo al principio
#los atributos muy privados se les pone dos guiones bajos y ahi si genera un cambio en codigo
class MiClase:
    def __init__(self):
        self._atributo_privado = "Valor 1"
        self.__atributo_muy_privado = "Valor 2"
        
objeto = MiClase()
#por mas que sea privado podemos acceder debido a que python no lo implementa esto del encapsulamiento
print(objeto._atributo_privado)
#pero los atributos muy privados si se comportan como privados
print(objeto.__atributo_muy_privado)



#DIP
#una clase mas grande y compleja no debe depender de otra mas chica al menos que sea abstracta
#

"""
class Diccionario:
    def verificar_palabras():
        pass
    
class CorrectorOrtografico():
    def __init__(self):
        self.diccionario = Diccionario()
        
    def corregir_texto(self, texto):
        pass
 """
    
#aca se viola el principio porque correctorortografico depende de diccionario, si de repente diccionario
#cambia debo cambiar toda la clase esta y esta clase es mas grande y compleja

#--------------------------------SOLUCION----------------------------------------
from abc import ABC, abstractclassmethod

class VerificadorOrtografico(ABC):
    
    @abstractclassmethod
    def verificar_palabra(self, palabra):
        pass

class Diccionario(VerificadorOrtografico):
    def verificar_palabra(self, palabra):
        pass

class CorrectorOrtografico:
    def __init__(self, verificador):
        self.verificador = verificador()
        
    def corregir_texto(self):
        pass
        
#ahora corrector depende de verificador y no de diccionario
#no debe depender de un metodo especifico, si no de una interfaz
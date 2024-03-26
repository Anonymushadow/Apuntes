#ISP
#no hay que obligar que un usuario haga uso de metodos inecesarios o imposibles

from abc import ABC, abstractclassmethod

"""
class Trabajador(ABC):
    
    @abstractclassmethod
    def comer(self): 
        pass
        
    @abstractclassmethod
    def dormir(self):
        pass
        
    @abstractclassmethod
    def trabajar(self):
        pass
    
    
    
class Humano(Trabajador):
    
    def comer(self): 
        print("El trabajador esta comiendo")
        
    def dormir(self):
        print("El trabajador esta durmiendo")
        
    def trabajar(self):
        print("El trabajador esta trabajando")
        
        
class Robot(Trabajador):
    
    def comer(self): 
        print("El robot esta comiendo")
        
    def dormir(self):
        print("El robot esta durmiendo")
        
    def trabajar(self):
        print("El robot esta trabajando")
 """  
        
#----------------------SOLUCION-----------------------------------

#debemos dividirlo en clases mas pequeñas

class Trabajador(ABC):
    
    @abstractclassmethod
    def trabajar(self):
        pass

class Comedor(ABC):
    
    @abstractclassmethod
    def comer(self): 
        pass

class Durmiente(ABC):
        
    @abstractclassmethod
    def dormir(self):
        pass
    
    

    
    
class Humano(Trabajador, Durmiente, Comedor):
    
    def comer(self): 
        print("El trabajador esta comiendo")
        
    def dormir(self):
        print("El trabajador esta durmiendo")
        
    def trabajar(self):
        print("El trabajador esta trabajando")
        
        
class Robot(Trabajador):
    
    def trabajar(self):
        print("El robot esta trabajando")
        
        
robot = Robot()
robot.trabajar()

humano = Humano()
humano.trabajar()
humano.comer()
humano.dormir()
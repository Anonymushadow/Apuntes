#abc es un modulo para trabajar con clases abstractas
#abstractclassmethod es un decorador para indicar que es una clase abstracta
from abc import ABC, abstractclassmethod

#al heredar de abc se convierte en una clase abstracta
class Persona(ABC):
    @abstractclassmethod
    def __init__(self, nombre, edad, sexo, actividad):
        self.nombre = nombre
        self.edad = edad
        self.sexo = sexo
        self.actividad = actividad
    
    @abstractclassmethod
    def hacer_actividad(self):
        pass
    
    def presentacion(self):
        print(f'Hola, me llamo {self.nombre}')

class Estudiante(Persona):
    def __init__(self, nombre, edad, sexo, actividad):
        super().__init__(nombre, edad, sexo, actividad)
        
    def hacer_actividad(self):
        print(f'Estudiando {self.actividad}')
        
        
class Trabajador(Persona):
    def __init__(self, nombre, edad, sexo, actividad):
        super().__init__(nombre, edad, sexo, actividad)
        
    def hacer_actividad(self):
        print(f'Trabajando en el rubro de {self.actividad}')
        
        
persona_1 = Estudiante("Nahuel", 29, "Masculino", "Ferreteria")

persona_1.hacer_actividad()

persona_2 = Trabajador("Juan", 39, "Masculino", "Programacion")

persona_2.hacer_actividad()

#una clase abstracta obliga a los hijos a usar los metodos abstractos, si no los implementan no se ejecutan 
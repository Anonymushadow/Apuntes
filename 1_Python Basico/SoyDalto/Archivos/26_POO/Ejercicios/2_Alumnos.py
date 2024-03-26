#crear un sistema para una escuela con dos clases principales: Persona y Estudiante
#Persona debera tener los atributos nombre y edad y un metodo  que imprima el nombre y la edad
#Estudiante debera heredar de persona y tener a parte un atributo grado y un metodo que imprima el grado

class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
    
    def mostrarDatos(self):
        print(f'El alumno {self.nombre} tiene {self.edad} años')
        
class Estudiante(Persona):
    def __init__(self, nombre, edad, grado):
        super().__init__(nombre, edad)
        self.grado = grado
        
    def mostrarDatos(self):
        print(f'El alumno esta en {self.grado} grado')
        
        
estudiante = Estudiante("Pablito", 12, "4to")

estudiante.mostrarDatos()

Persona.mostrarDatos(estudiante)
#crear una clase estudiante 
#debe tener los atributos nombre, edad y grado
#debe tener un metodo estudiarque diga "el estudiante (nombre) esta estudiando"
#crear un objeto estudiante ejecutar estudiar

class Estudiante:
    def __init__(self, nombre, edad, grado):
        self.nombre = nombre
        self.edad = edad
        self.grado = grado
        
    def Estudiar(self):
        print(f'El estudiante {self.nombre} esta estudiando')


nombre = input("Ingrese el nombre del estudiante: ")
edad = input(f'Ingrese la edad de {nombre}: ')
grado = input(f'Ingrese el grado de {nombre}: ')

estudiante_1 = Estudiante(nombre, edad, grado)

accion = input("Ingrerse la accion a realizar: ")

if(accion.lower == "estudiar"):
    estudiante_1.Estudiar()
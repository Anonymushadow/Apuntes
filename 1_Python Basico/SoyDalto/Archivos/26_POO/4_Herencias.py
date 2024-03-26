class Persona:
    def __init__(self, nombre, edad, nacionalidad):
        self.nombre = nombre
        self.edad = edad
        self.nacionalidad = nacionalidad
    
    def hablar(nombre):
        print('Hola, soy roberto')
    
#Empleado hereda de Persona los atributos y metodos
class Empleado(Persona):
    def __init__(self, nombre, edad, nacionalidad, trabajo, salario):
        super().__init__(nombre, edad, nacionalidad)
        self.trabajo = trabajo
        self.salario = salario

    #podemos reescroir propiedades o metodos
    def hablar(nombre):
        print('Hola, Rober')

roberto = Empleado("Roberto", 30, "argentino", "Chofer", 20000)

print(roberto.nacionalidad)
print(roberto.trabajo)
roberto.hablar()



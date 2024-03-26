class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
        
    def __str__(self):
        return f'Soy {self.nombre} y tengo {self.edad} años'
    
    def __repr__(self):
        return f'Persona("{self.nombre}", {self.edad})'
        
    
persona = Persona("Pablo", 23)
print(persona)

representacion = repr(persona)
print("Representacion: " + representacion)
representacion = eval(representacion)
print(f'Edad: {representacion.edad}')
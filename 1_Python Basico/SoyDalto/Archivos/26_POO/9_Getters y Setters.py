class Persona():
    def __init__(self, nombre, edad):
        self.__nombre = nombre
        self.__edad = edad
    
    #llamamos a la variable desde dentro de la misma clase y la retornamos desde la misma
    def get_nombre(self):
        return self.__nombre
    
    #Modificamos el atributo desde dentrro de la misma clase
    def set_nombre(self, newName):
        self.__nombre = newName
        
        
personaje = Persona("Nahuel", 23)

print(personaje.get_nombre())
personaje.set_nombre("Pablo")
print(personaje.get_nombre())
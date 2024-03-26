class Persona():
    def __init__(self, nombre, edad):
        self.__nombre = nombre
        self.__edad = edad
    
    @property
    def nombre(self):
        return self.__nombre
    
    @nombre.setter
    def set_nombre(self, newName):
        self.__nombre = newName
    
    @nombre.deleter
    def del_nombre(self):
        del self.__nombre
        
        
personaje = Persona("Nahuel", 23)

nombre = personaje.nombre
print(nombre)

personaje.set_nombre = "Pepe"

nombre = personaje.nombre
print(nombre)

#lo puedo eliminar porque es un deleter
del personaje.del_nombre


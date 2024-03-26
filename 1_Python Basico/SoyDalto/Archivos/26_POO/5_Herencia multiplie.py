class Persona:
    def __init__(self, nombre, edad, nacionalidad):
        self.nombre = nombre
        self.edad = edad
        self.nacionalidad = nacionalidad
    
    def hablar(nombre):
        print('Hola, soy yo')
     
        
class Artista():
        def __init__(self, habilidad):
            self.habilidad = habilidad
            
        def mostrarHabilidad(self):
            print(f'Mi habilidad es: {self.habilidad}')
            
class EmpleadoArtista(Persona, Artista):
    def __init__(self, nombre, edad, nacionalidad, habilidad, salario, empresa):
        #reemplazamos super por la clase dela cual se hereda cada cosa
         Persona.__init__(self, nombre, edad, nacionalidad)
         Artista.__init__(self, habilidad)
         self.salario = salario
         self.empresa = empresa
         
    def preguntarHabilidad():
        #con self muestro el metodo de la clase actual, si este fue modificado en esta clase se muestra modificado
        #con super muestro el metodo de la clase padre, los cambios de esta clse no se veran reflejados
        print(super().mostrarHabilidad())
        
    
persona = EmpleadoArtista("Pablo", 23, "boliviano", "Comer", 10000, "Coca-cola")

persona.mostrarHabilidad()



#EmpleadoArtista es sublcase de Persona?
herencia = issubclass(EmpleadoArtista, Persona)
print(herencia)


#persona es una instancia / objeto de Persona?
instancia = isinstance(persona, Persona)
print(instancia)
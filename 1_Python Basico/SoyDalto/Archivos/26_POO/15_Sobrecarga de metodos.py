class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
        
    def __str__(self):
        return f'Soy {self.nombre} y tengo {self.edad} años'
    
    def __repr__(self):
        return f'Persona("{self.nombre}", {self.edad})'
    
    def __add__(self, otro):
        nueva_edad = self.edad + otro.edad
        nuevo_nombre = self.nombre + otro.nombre
        return Persona(nuevo_nombre, nueva_edad)
    
    def __sub__(self, otro):
        nueva_edad = self.edad - otro.edad
        nuevo_nombre = self.nombre + otro.nombre
        return Persona(nuevo_nombre, nueva_edad)
    
    def __mul__(self, otro):
        nueva_edad = self.edad * otro.edad
        nuevo_nombre = self.nombre + otro.nombre
        return Persona(nuevo_nombre, nueva_edad)
    
    def __truediv__(self, otro):
        nueva_edad = self.edad / otro.edad
        nuevo_nombre = self.nombre + otro.nombre
        return Persona(nuevo_nombre, nueva_edad)
    
    def __floordiv__(self, otro):
        nueva_edad = self.edad // otro.edad
        nuevo_nombre = self.nombre + otro.nombre
        return Persona(nuevo_nombre, nueva_edad)
    
    def __mod__(self, otro):
        nueva_edad = self.edad % otro.edad
        nuevo_nombre = self.nombre + otro.nombre
        return Persona(nuevo_nombre, nueva_edad)
    
    def __pow__(self, otro):
        nueva_edad = self.edad ** otro
        nuevo_nombre = self.nombre
        return Persona(nuevo_nombre, nueva_edad)
    
    
persona = Persona("Pablo", 21)
persona_2 = Persona("Pedro", 30)
persona_3 = Persona("Maria", 35)

#------------------------------------------------------------------------
#SUMA
#------------------------------------------------------------------------
print("SUMA")
resultado = persona + persona_2 + persona_3
print(resultado.nombre)
print(resultado.edad)
print("\n\n")

#------------------------------------------------------------------------
#RESTA
#------------------------------------------------------------------------
print("RESTA")
resultado = persona - persona_2 - persona_3
print(resultado.nombre)
print(resultado.edad)
print("\n\n")

#------------------------------------------------------------------------
#MULTIPLICACION
#------------------------------------------------------------------------
print("MULTIPLICACION")
resultado = persona * persona_2 * persona_3
print(resultado.nombre)
print(resultado.edad)
print("\n\n")

#------------------------------------------------------------------------
#DIVISION
#------------------------------------------------------------------------
print("DIVISION")
resultado = persona / persona_2 / persona_3
print(resultado.nombre)
print(resultado.edad)
print("\n\n")

#------------------------------------------------------------------------
#RESTO
#------------------------------------------------------------------------
print("RESTO")
resultado = persona // persona_2 // persona_3
print(resultado.nombre)
print(resultado.edad)
print("\n\n")


#------------------------------------------------------------------------
#MODULO
#------------------------------------------------------------------------
print("MODULO")
resultado = persona % persona_2 % persona_3
print(resultado.nombre)
print(resultado.edad)
print("\n\n")


#------------------------------------------------------------------------
#POTENCIA
#------------------------------------------------------------------------
print("POTENCIA")
resultado = persona ** 2
print(resultado.nombre)
print(resultado.edad)
print("\n\n")
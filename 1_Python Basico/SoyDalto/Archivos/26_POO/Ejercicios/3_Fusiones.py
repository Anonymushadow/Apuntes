#crear una simulacion de juego
#habran dos o trers personajes
#al fusionarse se crearan un personaje mejorado
#la mejora va a ser promedio de las habilidades de ambos al cuadrado

from abc import ABC, abstractclassmethod

class Personajes(ABC):
    def __init__(self, nombre, defensa, ataque, habilidad):
        self.nombre = nombre
        self.defensa = defensa
        self.ataque = ataque
        self.habilidad = habilidad
    
    def ejecutarHabilidad(self):
        print(f'Ejecutando habilidad "{self.habilidad}2')
    
    def __add__(self, otro):
        nuevo_nombre = f'{self.nombre} fusion {otro.nombre}'
        nueva_defensa = ((self.defensa + otro.defensa) / 2) ** 2
        nuevo_ataque = ((self.ataque + otro.ataque) / 2) ** 2
        nueva_habilidad = f'{self.habilidad} lvl 2'
        return Personajes(nuevo_nombre, nueva_defensa, nuevo_ataque, nueva_habilidad)

class Robot(Personajes):
    def __init__(self, nombre, ataque, defensa, habilidad):
        super().__init__(nombre, ataque, defensa, habilidad)
        
class Mago(Personajes):
    def __init__(self, nombre, ataque, defensa, habilidad):
        super().__init__(nombre, ataque, defensa, habilidad)
        
class Soldado(Personajes):
    def __init__(self, nombre, ataque, defensa, habilidad):
        super().__init__(nombre, ataque, defensa, habilidad)
        


rob = Robot("Rob", 20, 45, "Moto cierra")
bob = Robot("Bob", 10, 55, "Martillo de hierro")
alex = Mago("Alex", 20, 60, "Portal al infierno")
tony = Mago("Tony", 50, 20, "Proteccion")
roy = Soldado("Roy", 20, 50, "Ataque aereo")
robyn = Soldado("Robyn", 30, 30, "Granada")
        
fusion_1 = rob + bob
print("\n\nFusion de Rob y Bob:")
print(fusion_1.nombre)
print(fusion_1.defensa)
print(fusion_1.ataque)
print(fusion_1.habilidad)
        
fusion_2 = alex + tony
print("\n\nFusion de Alex y Tony:")
print(fusion_2.nombre)
print(fusion_2.defensa)
print(fusion_2.ataque)
print(fusion_2.habilidad)
        
fusion_3 = roy + robyn
print("\n\nFusion de Roy y Robyn:")
print(fusion_3.nombre)
print(fusion_3.defensa)
print(fusion_3.ataque)
print(fusion_3.habilidad)
        
fusion_4 = rob + tony
print("\n\nFusion de Rob y Tony:")
print(fusion_4.nombre)
print(fusion_4.defensa)
print(fusion_4.ataque)
print(fusion_4.habilidad)
        
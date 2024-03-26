from sqlalchemy import true


class Perro():
    def _init_(self, raza, nombre, puntos):
        #atributos
        self.raza = raza
        self.nombre = nombre
        #puntos va a ser true o false
        self.puntos = puntos
huskie = Perro(raza = "Pastor Aleman", nombre = "Leia", Puntos = True)
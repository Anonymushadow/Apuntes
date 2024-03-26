class Animal():
    def _init_(self):
        print("Animal creado")

    def quien_soy(self):
        print("Soy un animal")

    def comer(self):
        print("Animal comiendo")


#perro heredade animal
class Perro(Animal): 
    def _init_(self):
        #Hererdar todas las funciones
        Animal._init_(self)
        print("Perro creado")
    
    #sobreescribo el metodo quien_soy()
    def quien_soy(self):
        print("Soy un Perro")


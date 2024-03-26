class Perro:
    def sonido(self):
        print("Guau")
        
class Gato:
    def sonido(self):
        print("Miau")
        
        
def hacer_sonido(animal):
    animal.sonido()

gato = Gato()
perro = Perro()

gato.sonido()
perro.sonido()

hacer_sonido(gato)
hacer_sonido(perro)


#polimorfismo,un mismo metodo funciona diferente en cada objeto


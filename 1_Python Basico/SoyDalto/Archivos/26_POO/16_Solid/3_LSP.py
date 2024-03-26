#LSP
#Una clase padre debe poder utilizarse donde se utilizan sus clases hijas

class Ave:
    def volar(self):
        print("Volar")
        
class Pinguino(Ave):
    def volar(self):
        print("No puedo volar")
        
pajaro = Ave()
pajaro.volar()

pajaro_2 = Pinguino()
pajaro_2.volar()

#aca pinguino es una clase hija de ave pero pinguino no puede volar y ave si
#un pinguino es un ave pero este no puede volar y un ave si

def hacerVolar(ave = Ave):
    return ave.volar()

#------------------------------SOLUCION-------------------------------------------------------
#en aves definimos las cosas que todas las aves pueden hacer y despues creo subclases especificas
class Aves():
    pass

class AveVoladora(Aves):
    def volar(self):
        return "Estoy volando"

class AveNoVoladora(Aves):
    def volar(self):
        return "No puedo volar"

class Pinguinos(AveNoVoladora):
    pass

pinguino = Pinguinos()
print(pinguino.volar())


cotorra = AveVoladora()
print(cotorra.volar())
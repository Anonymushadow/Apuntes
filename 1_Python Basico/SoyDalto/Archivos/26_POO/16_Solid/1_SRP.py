#SRP
#cada clase se encarga de una sola cosa

#clase con los datos de combustible
class Tanque:
    def __init__(self):
        #definimos el combustible
        self.combustible = 100
        
    #si usamos combustible debemos enviarle la cantidad
    def usar_combustible(self, cantidad):
        #se le resta al total de combustible la cantidad enviada como parametro
        self.combustible -= cantidad
    
    #para cargar combustible le enviamos la cantidad
    def cargar_combustible(self, cantidad):
        #a la cantidad total le sumamos la cantidad ingresada
        self.combustible += cantidad
    
    #funcion que retorna la cantidad de combustible que hay en el momento
    def obtener_combustible(self):
        return self.combustible


#creamos la clase auto
class Auto:
    #recibe un objeto tanque
    def __init__(self, tanque):
        self.posicion = 0
        self.tanque = tanque
        
    #funcion para mover el auto
    def mover(self, distancia):
        #si el tanque tiene al menos la mitad de combustible de lo que va a viajar 
        if (self.tanque.obtener_combustible() >= distancia / 2):
            #avanza esa distancia
            self.posicion += distancia
            #gasta 1L de combustible cada 2KM 
            self.tanque.usar_combustible(distancia / 2)
        else:
            #de lo contrario no avanza
            print("No hay suficiente combustible") 
            
    #mostramos la posicion del auto
    def mostrar_posicion(self):
        return self.posicion



    
tanque = Tanque()
chevrolet = Auto(tanque)

print(f'Combustible actual: {chevrolet.tanque.obtener_combustible()}')

print(f'Posicion actual: {chevrolet.mostrar_posicion()}')

chevrolet.mover(50)

print(f'Posicion actual: {chevrolet.mostrar_posicion()}')

print(f'Combustible actual: {chevrolet.tanque.obtener_combustible()}')

chevrolet.mover(60)

print(f'Posicion actual: {chevrolet.mostrar_posicion()}')

print(f'Combustible actual: {chevrolet.tanque.obtener_combustible()}')

chevrolet.mover(90)

print(f'Posicion actual: {chevrolet.mostrar_posicion()}')

print(f'Combustible actual: {chevrolet.tanque.obtener_combustible()}')

chevrolet.mover(80)

print(f'Posicion actual: {chevrolet.mostrar_posicion()}')

print(f'Combustible actual: {chevrolet.tanque.obtener_combustible()}')


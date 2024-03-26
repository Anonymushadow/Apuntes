class automovil():
    def __init__(self):
        self.__estado = "Apagado"
    
    def encender(self):
        self.__estado = "Encendido"
        print("El auto se encendio")
        
    def conducir(self):
        if(self.__estado == "Apagado"):
            self.__estado = "Encendido"
    print("Conduciendo")
    
auto = automovil()

#aca hay abstraccion xque solo le digo conducir pero de fondo se ejecutan varias cosas complejas
auto.conducir()
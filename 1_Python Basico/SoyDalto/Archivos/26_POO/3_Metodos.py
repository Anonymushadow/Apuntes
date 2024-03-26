class CelulaIphone:
    def __init__(self, marca, modelo, resolucion):
        self.marca = marca
        self.modelo = modelo
        self.resolucion = resolucion
    
    #se pone self para indicarle desde que objeto se esta llamando
    def llamar(self):
        print(f'Se esta realizando un llamado desde un {self.modelo}')
        
    def cortar(self):
        print("Se finalizo la llamada")

celular_1 = CelulaIphone("Iphone", "15 Pro", "60mp")
celular_1.llamar()
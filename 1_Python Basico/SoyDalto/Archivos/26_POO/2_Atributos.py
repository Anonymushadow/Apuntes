#Estaticos
class CelulaSamsung():
    marca = "Samsung"
    modelo = "S23"
    resolucionCamara = "48mp" 

celular_1 = CelulaSamsung()
print(celular_1.marca)

#De instancia
class CelulaIphone:
    def __init__(self, marca, modelo, resolucion):
        self.marca = marca
        self.modelo = modelo
        self.resolucion = resolucion

celular_2 = CelulaIphone("Iphone", "15 Pro", "60mp")
print(celular_2.marca)


#explicacion
#creo la clase
class CelulaIphone:
    #defino una funcion que se ejecutara al crear un objeto de esta clase, esta recibe marca, modelo y resolucion
    #self hace referencia al objeto en si que se crea
    def __init__(self, marca, modelo, resolucion):
        #aca indicamos que el objeto.marca va a ser igual a la marca ingresada y asi con cada uno
        self.marca = marca
        self.modelo = modelo
        self.resolucion = resolucion
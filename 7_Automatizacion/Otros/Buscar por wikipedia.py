import pywhatkit

buscar = input("Sobre que tema desea buscar\n")

try:
    pywhatkit.info(buscar, lines = 4)  
    print("Fin de la busqueda") 
except: 
    print("Error")

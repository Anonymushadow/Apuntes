import pywhatkit

Busqueda = input("¿Que desaea buscar?\n")

try:
    pywhatkit.search(Busqueda)
    print("Buscando")
except:
    print("Lo sentimos, hubo un error")
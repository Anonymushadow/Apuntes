from traceback import print_tb
import pywhatkit

video = input("Que desea buscar por youtube?\n")

try:
    pywhatkit.playonyt (video)
    print("Buscando")
except:
    print("Lo sentimos pero hubo un error")
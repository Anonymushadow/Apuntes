fichero = open("Documento a trabajar.txt", "r+")
fichero.write("Texto escrito y leido en python")
contenido = fichero.read()
fichero.close()
print(contenido)

'''
leer linea por linea:
for linea in ficheros:
    print(linea)
'''

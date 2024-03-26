archivo_sin_leer = open("24_Archivos\\txt\\datos.txt", encoding="utf-8")

#Leer todo el archivo
archivo = archivo_sin_leer.read()
print(f"Archivo completo: {archivo}")
archivo_sin_leer.close()

#leer la primera linea
archivo_sin_leer = open("24_Archivos\\txt\\datos.txt", encoding="utf-8")
linea_uno = archivo_sin_leer.readline()
print(f"primera linea: {linea_uno}")
archivo_sin_leer.close()

#leer la primera leta
archivo_sin_leer = open("24_Archivos\\txt\\datos.txt", encoding="utf-8")
linea_uno = archivo_sin_leer.readline(1)
print(f"primera letra: {linea_uno}")
archivo_sin_leer.close()

#Leer linea por linea y devolver una array con cada una
archivo_sin_leer = open("24_Archivos\\txt\\datos.txt", encoding="utf-8")
linea_por_linea = archivo_sin_leer.readlines()
print(f"linea por linea: {linea_por_linea}")
archivo_sin_leer.close()


#FORMA OPTIMA PARA NO ABRIR Y CERRAR

#Abrimos el archivo, lo guardamos como "archivo" y al finalizar las operaciones se cierra
with open("24_Archivos\\txt\\datos.txt", encoding="utf-8") as archivo:
    archivo_leido = archivo.read()
    print(f"Primer orden: {archivo_leido}")
    
    
    
#Sobreescribir
with open("24_Archivos\\txt\\datos.txt", "w", encoding="utf-8") as archivo:
    archivo.write("Escrito con write")

#Escribir lineas
with open("24_Archivos\\txt\\datos.txt", "w", encoding="utf-8") as archivo:
    archivo.writelines(["Escrito con writeline\n", "esto tambien\n"])
    archivo.writelines(["linea 3\n", "linea 4\n"])

    
#Escribir al final
with open("24_Archivos\\txt\\datos.txt", "a", encoding="utf-8") as archivo:
    archivo.write("Escrito con Append")
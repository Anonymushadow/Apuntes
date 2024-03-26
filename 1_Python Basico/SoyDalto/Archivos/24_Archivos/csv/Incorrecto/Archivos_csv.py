import csv

with open("24_Archivos\\csv\\Incorrecto\\datos.csv", "r") as archivo:
	print("Datos obtenidos")
	datos = csv.reader(archivo)
	for row in datos:	
		print(row)

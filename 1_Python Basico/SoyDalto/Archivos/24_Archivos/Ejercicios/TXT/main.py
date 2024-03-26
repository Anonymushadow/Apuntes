"""
1) tengo dos listas, 
una con nombre y una con apellido 
_registrar esta informacion en un TXT
"""

nombres = ["Nahuel", "Pablo", "Lucas", "Roberto"]
apellidos = ["Claudel", "Mack", "Strut", "Rodriguez"]

with open("alumnos.txt", "w") as documento:
	for nombre, apellido in zip(nombres, apellidos):
		documento.writelines(f"{nombre} {apellido}\n")
#paquete = carpeta con muchos modulos
#para que python detecte si la carpeta es un paquete esta debe tener un archivo llamado __init__.py

from paquete import saludar, despedir

saludo = saludar.Saludar("Nahuel")
print(saludo)

despedida = despedir.Despedir("Nahuel")
print(despedida)
#formato de impresion
edad = 25
nombre = "Violeta"

print("1) Hola Nahuel")
print("2) Hola {}".format("Esteban"))
print("3) Hola {} {} {}".format("Lucas", ", Jose", ", Maria"))
print("4) Hola {0} {1} {2}".format("Carlos", ", Manuel", ", Ana"))
print("5) Hola {x} {z} {y}".format(x = "Liliana", z = ", Sandro", y = ", Ariel"))
print("6) Hola {}".format(nombre))
print(f"7) Hola {nombre}")
print(f"8) Hola {nombre}, tenes {edad} años")

resultado = 100/888
#r:1.3f 
#   1 = tamaño del espacio antes de la coma
#   3f = cantidad de decimales
print("2) Hola {r:1.3f}".format(r = resultado))

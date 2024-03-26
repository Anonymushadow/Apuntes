#Funcion
def Saludar():
    print("Hola")

#Llamado
Saludar()


#Funcion con parametro
def Saludar(nombre):
    print(f"Hola {nombre}")
    
#Llamado
Saludar("Nahuel")


#Funcion que retorna
def Calculo(num):
    numero = num * 2
    return numero
    

numero = Calculo(89)
print(numero)


#Funcion con parametros indefinidos
def Sumar(*numeros):
    num = numeros * 2
    return num

print(Sumar(2, 5, 67, 3, -5))


#Forzar Valores
def Hola(nombre, apellido, adejtivo):
    print(f"Hola {nombre} {apellido}, sos un {adejtivo}")
    
Hola(apellido = "Claudel", nombre = "Nahuel", adejtivo = "Feo") #Si forzamos un argumento debemos hacerlo con los otros tambien

#Parametros por defecto
def Hola(nombre, apellido, adejtivo = "Tonto"):
    print(f"Hola {nombre} {apellido}, sos un {adejtivo}")
    
Hola(apellido = "Claudel", nombre = "Nahuel") 

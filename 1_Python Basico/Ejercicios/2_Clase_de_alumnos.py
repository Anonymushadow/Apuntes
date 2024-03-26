#En una clase faltaron los maestros por lo que los alumnos decidieron crear su propia clase donde el 
# alumno mas grande sera el maestro y el mas chico seria el ayudante (edades)

#A) Pedir las edades de los alumnos y ordenar de menor a mayor
#B) El Mayor es el profesor y el menor es el ayudante, quien es quien?

#A)
alumnos = []


def contar_alumnos(cantidad):
    for id in range(1, int(cantidad) + 1):
        nombre = input(f"Cual es el nombre y apellido del alumno nro {id}? ")
        edad = input(f"Cual es la edad de {nombre}? ")
        
        compañero = (nombre, edad)
        alumnos.append(compañero)
        
def verificar_edades():
    alumnos.sort(key=lambda x: x[1])#Ordenamos el array alumnos, ordenamos segun el elemento 1
    ayudante = alumnos[0]
    profesor = alumnos[- 1]
    print(f"El Profesor es {profesor[0]} con {profesor[1]} años")
    print(f"El Ayudante es {ayudante[0]} con {ayudante[1]} años")
    

cantidad_asistida = input("Cuantos allumnos ingresaron hoy?: ")
contar_alumnos(cantidad_asistida)
verificar_edades()

name = "Pam"
ultimas_letras = name[1:]
letra = "Z"
name = letra + ultimas_letras
print(name)
print(name * 10)

#mayusculas
name = "nahuel"
name = name.upper()
print(name)

#minusuclas
name = "NAHUEL"
name = name.lower()
print(name)

#separar palabras
saludo = "Hola mi querido mundo extraño"
saludo = saludo.split()
print(saludo)

#separar en lugares mas epecificos
#aca va a quitar las o y va a  separar la cadena en esas partes
saludo = "Hola mi querido mundo extraño"
saludo = saludo.split("o")
print(saludo)


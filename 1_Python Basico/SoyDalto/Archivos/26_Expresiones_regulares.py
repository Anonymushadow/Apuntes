import re

texto = """Linea 1: Como estas?2344
Linea 2: Mi nombre es nahuel
Linea 3: _Tengo 20 años_43434
Lininea 43: Soy programador.
4545 nini in ii nn nin in ini nni n ini ni 
(Linea 1: Como estas?)
Linea 2: Mi nombre es ricardo
Linea 3: Tengo 36 años-453
335
Linea 4. : Soy bombero54353
"""

#Buscar la primera vez que aparece una palabra especifica
resultado = re.search("Soy", texto)
print(f"Primer \"Soy\": {resultado}")
print("--------------------------------------------------------------------------")

#Buscar todas las veces que se repite una palabra especifica
resultado = re.findall("Tengo", texto)
print(f"Todos los \"Tengo\": {resultado}")
print("--------------------------------------------------------------------------")

#Buscar ignorando las mayusculas
resultado = re.search("Soy", texto, flags=re.IGNORECASE)
print(f"El primer soy sin importar las mayusculas: {resultado}")
print("--------------------------------------------------------------------------")
resultado = re.findall("tengo", texto, flags=re.IGNORECASE)
print(f"Todos los \"Tengo\" ignorando mayusculas: {resultado}")
print("--------------------------------------------------------------------------")

#Buscar digitos del 0 - 9
resultado = re.findall(r"\d", texto)
print(f"Digitos del 0 al 9: {resultado}")
print("--------------------------------------------------------------------------")

#Buscar todo menos digitos del 0 - 9
resultado = re.findall(r"\D", texto)
print(f"todo menos los Digitos del 0 al 9: {resultado}")
print("--------------------------------------------------------------------------")

#Buscar caracteres alfanumericos [A-Z a-z 0-9 _]
resultado = re.findall(r"\w", texto)
print(f"Caracteres alfanumericos: {resultado}")
print("--------------------------------------------------------------------------")

#Buscar todo menos caracteres alfanumericos [A-Z a-z 0-9 _]
resultado = re.findall(r"\W", texto)
print(f"Todo menos Caracteres alfanumericos: {resultado}")
print("--------------------------------------------------------------------------")

#Buscar espacios en blanco
resultado = re.findall(r"\s", texto)
print(f"Espacios en blanco: {resultado}")
print("--------------------------------------------------------------------------")

#Buscar todo menos espacios en blanco
resultado = re.findall(r"\S", texto)
print(f"Todo menos Espacios en blanco: {resultado}")
print("--------------------------------------------------------------------------")

#Buscar todo menos saltos en linea
resultado = re.findall(r".", texto)
print(f"Todo menos Saltos en liena: {resultado}")
print("--------------------------------------------------------------------------")

#Buscar saltos en linea
resultado = re.findall(r"\n", texto)
print(f"Saltos en liena: {resultado}")
print("--------------------------------------------------------------------------")

#Buscar puntos --> la barra en diagonal cancela la funcionallidad de ese caracter especial
resultado = re.findall(r"\.", texto)
print(f"Puntos: {resultado}")
print("--------------------------------------------------------------------------")






#Buscar numero, seguido de un punto, seguido de un texto
resultado = re.findall(r"\d\.\s", texto)
print(f"Cadena 1: {resultado}")
print("--------------------------------------------------------------------------")

#Buscar inicio de linea (^)
resultado = re.findall(r"^", texto)
print(f"Inicio de linea: {resultado}")
print("--------------------------------------------------------------------------")


#Verificar si el texto comienza con "Linea"
resultado = re.findall(r"^Linea", texto)
print(f"Inicio de linea con \"Linea\": {resultado}")
print("--------------------------------------------------------------------------")

#Verificar si el texto comienza con "Linea" en cada una de las lineas
resultado = re.findall(r"^Linea", texto, flags=re.M)
print(f"Inicio de cada linea con \"Linea\": {resultado}")
print("--------------------------------------------------------------------------")

#Buscar final de linea
resultado = re.findall(r"bombero$", texto)
print(f"Final de linea: {resultado}")
print("--------------------------------------------------------------------------")


#Buscar cierta cantidad junta
resultado = re.findall(r"\d{2}", texto)
print(f"Dos numeros juntos: {resultado}")
print("--------------------------------------------------------------------------")

#Buscar cierta cantidad junta con un rango
resultado = re.findall(r"\d{2,4}", texto)
print(f"Minimo 2 y maximo 4: {resultado}")
print("--------------------------------------------------------------------------")


#Buscar un conjunto que se repita
resultado = re.findall(r"(in){1,3}", texto)
print(f"De una a tres veces \"in\": {resultado}")
print("--------------------------------------------------------------------------")

#Buscar [in, ii, nn, ni]
resultado = re.findall(r"[in]{2}", texto) #el corchete busca los caracteres sin importar si estan juntos, separados, en desorden, etc
print(f"cada combo posible \"in\": {resultado}")
print("--------------------------------------------------------------------------")

#Buscar al menos una coincidencia
resultado = re.findall(r"li|20", texto, flags=re.IGNORECASE)
print(f"Un resultado o ambos: {resultado}")
print("--------------------------------------------------------------------------")

#Buscar donde puede que haya algo como que no
#puede haber algun caracter como puede que no
resultado = re.findall(r".*", texto)
print(f"Numeross de linea optativo: {resultado}")
print("--------------------------------------------------------------------------")

#puede haber algun caracter como puede que no incluyendo saltos de linea
resultado = re.findall(r".*", texto, re.DOTALL) #re.DOTALL --> toma los saltos de linea
print(f"Numeross de linea optativo: {resultado}")
print("--------------------------------------------------------------------------")


#Verificar que no se repita "Linea"
resultado = re.findall(r"(?!.*Linea.*Linea)", texto)
print(f"Repetidos: {resultado}")
#(?!) --> verifica que no ocurra lo siguiente... 
print("--------------------------------------------------------------------------")

#Buscar coincidencia y reemplazar por otra cosa
Ejemplo = "La fecha es 23/06/2021 y el telefono es +1-555-555-5555"
pattern = r"\d{2}/\d{2}/\d{4}"
replacement = "Fecha oculta"
new_text = re.sub(pattern, replacement, Ejemplo) #con sub reemplazamos
print(f"Nuevo texo: {new_text}")
print("--------------------------------------------------------------------------")


#Verificar mail
gmail = "ejemplomail23@gmail.com"
patron = r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
x = re.match(patron, gmail)
print(x)
print("--------------------------------------------------------------------------")


#Buscar Nombres sin importar si tiene s o no
resultado = re.findall(r"nombres?", texto, flags=re.IGNORECASE)
print(f"Nombres?: {resultado}") 
print("--------------------------------------------------------------------------")
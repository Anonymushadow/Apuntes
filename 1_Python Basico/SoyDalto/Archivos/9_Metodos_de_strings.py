cadena1 = "Hola Mundo"
cadena2 = "Adios Mundo"


#vemos los metodos disponiles del objeto
metodos_disponibles = dir(cadena1)
print(f"Dir: {metodos_disponibles}")

#convertir a mayusculas
mayuscula = cadena1.upper()
print(f"Upper: {mayuscula}")

#convertir a minuscula
minuscula = cadena1.lower()
print(f"Lower: {minuscula}")

#convertir primer letra a mayusculas y el resto a minusculas
letra_mayuscula = cadena1.capitalize()
print(f"Capitalize: {letra_mayuscula}")

#Buscar un valor dentro (y devuelve la posicion y si no esta devuelve -1)
busqueda = cadena1.find("Hola")
print(f"Find: {busqueda}")

#Buscar un valor dentro de otra cadena, si no hay coincidencia nos tira un error
busqueda_en_cadena = cadena1.index("o")
print(f"Index: {busqueda_en_cadena}")

#Verifica si es un numero (por mas que sea un texto solo con numeros)
es_un_numero = cadena1.isalnum()
print(f"Isanum: {es_un_numero}")

#Verifica si es alfanumerico (solo caracteres desde la a a la z, ni caracteres especiales ni epacios)
es_un_alfanumerico = cadena1.isalpha()
print(f"Isalpha: {es_un_alfanumerico}")

#Buscamos cuantas veces se encuentra la coincidencia
cantidad_de_coincidencias = cadena1.count("o")
print(f"Count: {cantidad_de_coincidencias}")  

#Contar caracteres
cantidad_de_caracteres = len(cadena1)
print(f"Len: {cantidad_de_caracteres}")  

#Verificamos si comienza con tal cosa
comienza_con = cadena1.startswith("H");
print(f"Startswith: {comienza_con}")  

#Verificamos si acaba con tal cosa
acaba_con = cadena1.endswith("Mundo");
print(f"Endswith: {acaba_con}")  

#Reemplazamos un pedazo por otro replace("texto a reemplazar", "texto a poner en su lugar")
# si no se encuentra el texto a reemplazar devuelve todo lo que tenia la cadena en un comienzo
reemplazo = cadena1.replace("Mundo", "Planeta");
print(f"Cadena: {cadena1}")  
print(f"Replace: {reemplazo}")  

#Separar cadenas cuando haya tal cosa
cadena_separada = cadena1.split(" ");
print(f"Split: {cadena_separada}")  
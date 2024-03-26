#crear variable con camelCase
nombreTuyo = "Nahuel"

#crear variable con snake_case
nombre_mio = "Pedro"

#Concatenar --> unir cadenas de texto

#Concatenar con "+"
bienvenida = "Hola " + nombreTuyo + " como estas?"

#Concatenar con f-String
despedida = f"Adios {nombre_mio}"

print(bienvenida);
print(despedida);

#Eliminamos la varable bienvenida
del bienvenida

#Buscamos si existe "ola" dentro de despedida (da True)
print("ola" in despedida)

#Buscamos si no existe "ola" dentro de despedida (da True)
print("ola" not in despedida)

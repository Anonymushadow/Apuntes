import pandas as pd

#df = dataframe = filas y columnas
#con names definimos el encabezado de la taba
df = pd.read_csv("24_Archivos\\csv\\Pandas\\datos.csv", names=["Name", "Lastname", "Edad"])
df2 = pd.read_csv("24_Archivos\\csv\\Pandas\\datos.csv", names=["Name", "Lastname", "Edad"])

#obtener datos de la columna name
print(df["Name"])
print("-------------------------------------------------------------")

#slicing
cadena = "0123456789"
#seleccionar toda la cadena
print(cadena[:])
print("-------------------------------------------------------------")
#Seleccionar desde la posicion 2 al final
print(cadena[2:])
print("-------------------------------------------------------------")
#Seleccionar desde la posicion 0 a la 5
print(cadena[:5])
print("-------------------------------------------------------------")
#Seleccionar desde la posicion 2 a la 6
print(cadena[2:6])
print("-------------------------------------------------------------")

#ordenar por nombre
df_ordenado = df.sort_values(by="Name") #Metodo 1
print(f"Lista ordenada por nombre:\n {df_ordenado}")
print("-------------------------------------------------------------")
df_ordenado = df.sort_values("Name") #Metodo 2
print(f"Lista ordenada por nombre:\n {df_ordenado}")
print("-------------------------------------------------------------")

#ordenar de forma descendente
df_ordenado = df.sort_values("Name", ascending=False)
print(f"Lista ordenada por nombre inverso:\n {df_ordenado}")
print("-------------------------------------------------------------")

#concatenar dos tablas
df_concatenados = pd.concat([df, df2])
print(f"Listas concatenadas:\n {df_concatenados}")
print("-------------------------------------------------------------")

#Ver primeras filas (el nro es la cantidad de filas)
df_primeras_filas = df.head(0) # encabezado
print(f"Encabezado:\n {df_primeras_filas}")
print("-------------------------------------------------------------")
df_primeras_filas = df.head(2) #primeras 2 filas
print(f"Primeras dos filas:\n {df_primeras_filas}")
print("-------------------------------------------------------------")


#Ver ultimas filas
df_ultimas_filas = df.tail(0) #Ultima
print(f"Ultima fila:\n {df_ultimas_filas}")
print("-------------------------------------------------------------")
df_ultimas_filas = df.tail(3) #Ultimas 3
print(f"Ultimas tres filas:\n {df_ultimas_filas}")
print("-------------------------------------------------------------")

#Acceder a la cantidad de filas y columnas 
filas, columnas = df.shape 
#devuelve (filas, columnas)

#Obtener datos estadisticos
df_info = df.describe()
print(f"Datos estadisticos:\n {df_info}")
print("-------------------------------------------------------------")

#acceder a un dato especifico
elemento = df.loc[2, "Edad"] #fila 2, elemento Edad
print(f"Edad de la fila 2:\n {elemento}")
print("-------------------------------------------------------------")

#acceder a un dato especifico mediante indices
elemento_i = df.iloc[2, 2] #fila 2, columna 2
print(f"Edad de la fila 2:\n {elemento_i}")
print("-------------------------------------------------------------")

#Seleccionar todas las filas de una columna
Apellidos = df.loc[:, "Lastname"]
Apellidos = df.iloc[:, 1]
print(f"Apellidos:\n {Apellidos}")
print("-------------------------------------------------------------")

#Seleccionar todas las columnas de una fila
Apellidos = df.loc[2, :]
Apellidos = df.iloc[2, :]
print(f"Fila 2 completa:\n {Apellidos}")
print("-------------------------------------------------------------")

#Acceder a filas donde la edad es mayor a 30
df["Edad"] = df["Edad"].astype(int) # convierto la columna a int
mayor_a_30 = df.loc[df["Edad"] > 30, :]
print(f"Edades mayores a 30:\n {mayor_a_30}")
print("-------------------------------------------------------------")


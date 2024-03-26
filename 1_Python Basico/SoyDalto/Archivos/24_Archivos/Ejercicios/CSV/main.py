import pandas as pd

"""
1) Cambiar el tipo de dato de una columna
"""

df = pd.read_csv("c:\\Users\\claud\\Desktop\\Python\\Dalto\\24_Archivos\\Ejercicios\\CSV\\datos.csv")
print(df)
print(df["Edad"])
df["Edad"] = df["Edad"].astype(str)
print(f"Edad en strings: {df['Edad']}")
print("-------------------------------------------------------------")

"""
2) Reemplazar el apellido Strut por Jordison
"""

df["Apellido"].replace("Strut", "Jordison", inplace=True)
print(f"Apellidos sin Strut: {df['Apellido']}")
print("-------------------------------------------------------------")

"""
3) Eliminar las filas con datos faltantes
"""

df = df.dropna()
print(f"Tabla sin filas con datos faltantes: {df}")
print("-------------------------------------------------------------")

"""
4) Eliminar las filas duplicadas
"""

df = df.drop_duplicates()
print(f"Tabla sin filas repetidas: {df}")
print("-------------------------------------------------------------")

"""
5) Guardar los datos en un archivo nuevo
"""

df.to_csv("C:\\Users\\claud\\Desktop\\Python\\Dalto\\24_Archivos\\Ejercicios\\CSV\\datos_limpios.csv")



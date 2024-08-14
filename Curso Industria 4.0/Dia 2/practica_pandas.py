import pandas as pd
import matplotlib.pyplot as plt

# Leer csv
df = pd.read_csv("coin_BinanceCoin.csv")

# Primeras 5 lineas
print(df.head())

# Leer ultimas 5 lineas
print(df.tail())

# Datos sobre la estructura
print(df.shape)

# Ver una columna especifica
print(df.Symbol)

# Ver datos de una columna pero omitiendo repetidos
print(df.Symbol.unique())

# Ver solo las columnas que especificamos
columnas_interesantes = ["Symbol", "Name", "High"]
print(df[columnas_interesantes])

# Agrupar
df_group = df.groupby(["High"])
maximos = df_group.High.mean()

plt.plot(maximos)
plt.show()
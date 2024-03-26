import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv("C:\\Users\\claud\\Desktop\\Python\\Dalto\\24_Archivos\\Ejercicios\\Graficos\\Barras\\datos.csv")

#creamos el grafico
sns.barplot(x="fuente", y="ingreso", data=df)

#Obtenemos los ingresos totales
total_ingresos = df["ingreso"].sum()
print(f"Total de ingresos: ${total_ingresos}")

#Mostramos el grafico
plt.show()
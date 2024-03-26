import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv("C:\\Users\\claud\\Desktop\\Python\\Dalto\\24_Archivos\\Ejercicios\\Graficos\\Lineal\\datos.csv")

#creamos el grafico
sns.lineplot(x="fecha", y="ventas", data=df)

#Marcamos el punto mas alto
plt.plot("01-15", 14,"o")

#Mostramos el grafico
plt.show()
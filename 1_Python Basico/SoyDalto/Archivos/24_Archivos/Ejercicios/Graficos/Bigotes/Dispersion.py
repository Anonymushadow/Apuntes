import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv("C:\\Users\\claud\\Desktop\\Python\\Dalto\\24_Archivos\\Ejercicios\\Graficos\\Bigotes\\datos.csv")

#creamos el grafico
sns.boxplot(x="categoria", y="valor", data=df)

#Mostramos el grafico
plt.show()
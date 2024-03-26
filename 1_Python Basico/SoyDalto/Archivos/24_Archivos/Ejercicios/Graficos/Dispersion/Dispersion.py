import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv("C:\\Users\\claud\\Desktop\\Python\\Dalto\\24_Archivos\\Ejercicios\\Graficos\\Dispersion\\datos.csv")

#creamos el grafico
sns.scatterplot(x="tiempo", y="dinero", data=df)

#Mostramos el grafico
plt.show()
import matplotlib.pyplot as plt
import random

'''
precio_btc = [random.randint(19000, 100000), random.randint(19000, 100000), random.randint(19000, 100000), random.randint(19000, 100000), random.randint(19000, 100000), random.randint(19000, 100000), random.randint(19000, 100000), random.randint(19000, 100000), random.randint(19000, 100000), random.randint(19000, 100000), random.randint(19000, 100000)]
precio_eth = [random.randint(20000, 50000), random.randint(20000, 50000), random.randint(20000, 50000), random.randint(20000, 50000), random.randint(20000, 50000), random.randint(20000, 50000), random.randint(20000, 50000), random.randint(20000, 50000), random.randint(20000, 50000), random.randint(20000, 50000), random.randint(20000, 50000)]

plt.plot(precio_btc, label="BTC")
plt.plot(precio_eth, label="ETH")
plt.legend()
plt.style.use("ggplot")
plt.title("Precio de criptomonedas")
plt.show()
'''

'''
x = [-5, -4, -3, -2, 1, 0, 1, 2, 3, 4, 5]
y = [3, 6, 2, 7, 7, 0, 1, 2, 1, -5, 0]

plt.plot(x, y)
plt.show()
'''

def importarArchivo(archivo):
    with open(archivo) as a:
        valores = [int(fila) for fila in open(archivo).readlines()]
        a.close()
    return valores

sensor = importarArchivo("sensor.txt")

plt.plot(sensor)
plt.show()

'''
GRAFICOS
plt.plot(valores) #grafica una lista de valores
plt.plot(x,y) #arma un gráfico XY de dos listas de valores
plt.bar(etiquetas,valores) #hace un gráfico de barras con dos listas, o un diccionario
plt.scatter(x,y) #hace un gráfico de dispersión
plt.pie(tamaños,labels=etiquetas) # Hace un gráfico de torta, el primero es una lista de valores en %, y lo segundo la lista de etiquetas

TXT:
plt.title("Titulo del gráfico")
plt.xlabel("Titulo del eje X")
plt.ylabel("Titulo del eje Y")

LIMITES:
plt.xlim(0, 5) #límites del eje X
plt.ylim(0, 35) #límites del eje Y


'''
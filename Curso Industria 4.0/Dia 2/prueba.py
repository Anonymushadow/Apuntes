import paho.mqtt.client as mqtt
import random
import time

servidor = "broker.mqtt.cool"

cliente = mqtt.Client(protocol=mqtt.MQTTv5)
cliente.connect(servidor, 1883)

try:
    while True:
        precio = random.randint(60000, 100000)
        cliente.publish("topico_precio", precio);
        time.sleep(2)
except:
    cliente.close()
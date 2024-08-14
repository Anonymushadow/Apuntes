import paho.mqtt.client as mqtt
import time 

servidor = "broker.mqtt.cool"
cliente = mqtt.Client(protocol=mqtt.MQTTv5)

cliente.connect(servidor, 1883) # Servidor, Puerto

contador = 0

while True:
    contador += 1
    cliente.publish("mi_topico", f"Mensaje Nº{ contador }")
    time.sleep(1)
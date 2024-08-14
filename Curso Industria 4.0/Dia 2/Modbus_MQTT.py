from pymodbus.client import ModbusTcpClient
import paho.mqtt.client as mqtt
import time

# Leer estado de un boton 
# Guardar el estado de ese boton
# Mediante mqtt enviar mediante el broker

PLC = ModbusTcpClient("102.168.5.57")
PLC.connect()

servidor = "broker.mqtt.cool"

cliente = mqtt.Client(servidor, 1883)
cliente.connect(protocol=mqtt.MQTTv5)

try:
    while True:
        lectura = PLC.read_discrete_inputs(0, 1)
        lectura = lectura.bits[0]
        
        cliente.publish("topico_temperatura", lectura)
        time.sleep(2)
except:
    PLC.close()



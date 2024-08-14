from pymodbus.client import ModbusTcpClient

cliente = ModbusTcpClient("192.168.5.49") # IP aleatoria

cliente.connect()

velocidad_RPM = cliente.read_discret_inputs(40341, 1)

print(f"La velocidad es de { velocidad_RPM.bits[0] }RPM")

from pymodbus.client import ModbusTcpClient
import time

# Conexion al servidor
cliente = ModbusTcpClient("192.168.5.20")

# Establecer la conexion
cliente.connect()

# Modificar salida del PLC
cliente.write_coil(1, True) # La salida 1 le enviamos un encendido

# Leer salidas del PLC
lectura = cliente.read_discrete_inputs(0, 1) # Leemos desde la posicion 0 la cantidad de 1

try:
    while True:
        print(f"El estado de la entrada es { lectura.bits[0] }")
        time.sleep(1) # Cada un segundo se vuelve a leer
except:
    # Desconectarnos
    cliente.close()

# Comandos posibles:
# Lectura ---
# cliente.read_coils(direccion,cantidad)
# cliente.read_discrete_inputs(direccion,cantidad)
# cliente.read_input_registers(direccion,cantidad)
# cliente.read_holding_registers(direccion,cantidad)
# Escritura ---
# cliente.write_coil(direccion,valor)
# cliente.write_register(direccion,cantidad)
import Modulo_saludar
import Modulo_despedir as m_despedir
from Modulo_aritmetica import Suma, Resta
#from Modulo_aritmetica import * --> importamos todo del modulo pero es mala practica
from Modulo_combinado import animal_funcion as a_funcion, animal_variable as a_variable

saludo = Modulo_saludar.Saludar("Nahuel")
print(saludo)

suma = Suma(2, 5)
print(suma)

resta = Resta(2, 5)
print(resta)

despido = m_despedir.Despedir("Nahuel")
print(despido)

#Ver el nombre original del modulo
print(m_despedir.__name__)
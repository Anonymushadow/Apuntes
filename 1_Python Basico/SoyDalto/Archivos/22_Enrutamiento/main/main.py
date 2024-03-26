#sys es un modulo built-in 
import sys  
#sys.builtin_module_name nos muestra los modulos dentro de sys
#para añadir una ruta de un modulo al path y acceder desde ahi --> path poner doble linea diagonal no una
sys.path.append("C:\\Users\\claud\\Desktop\\Python\\Dalto\\22_Enrutamiento\\modulos")
#import nombre_del_modulo_de_la_ruta

import saludos.saludar as m_saludar
import cuentas.suma as m_sumar


print(m_sumar.Suma(45))

print(m_saludar.Saludar("Nahuel"))
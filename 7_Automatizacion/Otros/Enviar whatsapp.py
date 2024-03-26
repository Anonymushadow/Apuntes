import pywhatkit

#numero a enviar, mensaje, tiempo en horass y tiempo minutos
#pywhatkit.sendwhatmsg("+5491126418379", "Probando", 14, 16)


#numero a enviar, mensaje, tiempo en horass y tiempo minutos, 
#tiempo de espera para enviar el msg, cerar la pestaña?, despues de cuantos segundos
pywhatkit.sendwhatmsg("+5491168129047", "Probando", 19, 10, 20, True, 2)

#enviar msg a grupos
#hay que conseguir el id del grupo, en el link se consigue el id
pywhatkit.sendwhatmsg_to_group("HomSN06omM11k5J2fiRuCS", "Hola", 19, 15)
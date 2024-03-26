import pywhatkit

contactos = [{"Anonymushadow": "5491168129047"}]

contacto = input("Contacto a enviar el mensaje:\n")

try:
    if (contacto.find("+")):
        pass
    else:
        print("Buscando contacto...")
        if (contactos.key(contacto)):
            contacto = f'{contactos[contacto]}'
            print("Contacto encontrado")
        else:
            print("Lo sentimos pero este contacto no existe")
        msg = input("Mensaje a enviar:\n")
    hora = input("¿a que hora dese enviarlo?")

    if (len(hora) == 5):
        h = f'{hora[0]}{hora[1]}'
        m = f'{hora[3]}{hora[4]}'
    elif(len(hora) == 4):
        h = f'0{hora[0]}'
        m = f'{hora[2]}{hora[3]}'
    elif(len(hora) == 2):
        h = f'{hora[0]}{hora[1]}'
        m = '00'
    else:
        print("Horario no valido")

except:
    print("lo sentimos pero algo fallo")



#numero a enviar, mensaje, tiempo en horass y tiempo minutos, 
#tiempo de espera para enviar el msg, cerar la pestaña?, despues de cuantos segundos
pywhatkit.sendwhatmsg(contacto, msg, h, m, True, 5)


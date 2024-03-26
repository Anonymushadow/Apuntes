import re

gmail = "claudelnahuel22@gmail.com"

#- --> hace separaciones, es como rangos
#% --> todo lo que este antes y despues es valido
#+ --> minimo una coincidencia, maximo no importa
patron = r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"

x = re.match(patron, gmail)

print(x)
import re

#detectando un numero CABA y ocultandolo

texto = "Hola perdo, mi numero es: +54 11 6812-9047"

patron = r"(\+54)\s\d{2}\s\d{4}-\d{4}"

resultado = re.sub(patron, "(Numero Oculto)", texto)

print(resultado)
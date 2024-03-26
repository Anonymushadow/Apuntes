import re

texto = "este es un ejemplo de pagina web: https://www.facebook.com"

#el ? indica que la s puede ser opcional, pero solo una vez
patron = r"https?://[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"

x = re.findall(patron, texto)

print(x)
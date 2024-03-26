import re

text = "Reemplazar las vocales por un asterisco"

x = re.sub("[aeiou]", "*", text)

print(x)
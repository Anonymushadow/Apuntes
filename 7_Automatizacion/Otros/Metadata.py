import os
from pathlib import Path

#metadata

#obtener el tamaño
print(f'Tamaño: {os.path.getsize("Data")}')

#obtener la ruta absoluta
print(f'Ruta absoluta: {os.path.abspath("Data")}')


#Path
#resolve == abspath
print(Path("txt1.txt").resolve())
#stem --> nombre del archivo sin extencion
print(Path("txt1.txt").stem())
#.suffix --> ver la extencion del archivo
print(Path("txt1.txt").suffix)
print(Path("txt1.txt").stat().st_size)
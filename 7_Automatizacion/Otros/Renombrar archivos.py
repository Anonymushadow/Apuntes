import os
from pathlib import Path

#renombrar con os
os.rename("Dataset", "Data")

#renombrar con Path
path_actual = Path("Dataset2")
path_objetivo = Path("Data2")

Path.rename(path_actual, path_objetivo)

#renombrar archivos acabados en .txt por el mismo nombre pero con 2022_ al comienzo
for file in os.listdir():
    if file.endswith(".txt"):
        os.rename(file, f'2022_{file}')

#exists verifica si existe
print(os.path.exists("Data"))
archivo = Path("Data")

print(archivo.exists())
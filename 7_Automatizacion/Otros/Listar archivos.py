import os
from pathlib import Path

#metodo 1
#print(os.listdir())
#print(os.listdir("directorio"))

#metodo 2
print(list(Path().iterdir()))
#print(list(Path().iterdir("directorio")))
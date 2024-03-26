from ast import Str
import calendar
from importlib.resources import path
from pathlib import Path
#con path se manejas carpetas

mes = list(calendar.month_name[1:])
Dias = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

for i in range(31):
     x = i + 1
     Dias[i] = f'Day {x}'
    
#i --> numerop del mes
#
for i, mes in enumerate(mes):
    for  dia in Dias:
        Path(f'2022/{i + 1}.{mes}/{dia}').mkdir(parents = True, exist_ok = True)
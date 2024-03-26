#en promedio el tiempo de un curso de python basico de recorrido se suele ser de 2.5hs minimo, 7h maximo 
# y 4hs promedio
#El curso de lucas lo logro en 1.5h
#aproximadamente suelen durar en promedio 5h en crudo pero con la edicion se reducen a 4h,
#El curso de lucas duraba 3.5h en crudo y 1.5h editado

#A)Cual es la diferencia en porcentaje entrer el curso de lucas y:
    # El mas rapido
    # El mas lento
    # El promedio
#B)Cual es el porcentaje de video que se reduce del crudo en ambos casos? (cursos promedio y lucas)
#C)Ver 10hs del curso de lucas, seria equivalente a ver cuantas horas de los demas cursos?




#Variables
minimo = 2.5
maximo = 7
promedio = 4
crudo_promedio = 5
crudo_lucas = 3.5
lucas = 1.5

#A)
#Diferencia de lucas y el mas rapido
diferencia_lucas_minimo = (lucas / minimo) * 100
diferencia_lucas_minimo = 100 - diferencia_lucas_minimo
print(f"En total hay un %{diferencia_lucas_minimo} de diferencia entre el curso de lucas y el de menor tiempo")

#Diferencia de lucas y el mas lento
diferencia_lucas_maximo = (lucas / maximo) * 100
diferencia_lucas_maximo = 100 - diferencia_lucas_maximo
print(f"En total hay un %{diferencia_lucas_maximo} de diferencia entre el curso de lucas y el de mayor tiempo")

#Diferencia de lucas y el mas promedio
diferencia_lucas_promedio = (lucas / promedio) * 100
diferencia_lucas_promedio = 100 - diferencia_lucas_promedio
print(f"En total hay un %{diferencia_lucas_promedio} de diferencia entre el curso de lucas y el promedio de los demas")


#B) Reducciom
porcentaje_reduccion_lucas= (lucas / crudo_lucas)*100
porcentaje_reduccion_lucas = 100 - porcentaje_reduccion_lucas
print(f"el porcentaje de reduccion del crudo en el curso de lucas es de %{porcentaje_reduccion_lucas}")

porcentaje_reduccion_promedio = (promedio / crudo_promedio)*100
porcentaje_reduccion_promedio = 100 - porcentaje_reduccion_promedio
print(f"el porcentaje de reduccion del crudo en general es de %{porcentaje_reduccion_promedio}")




# C) Cálculo de equivalencia de horas de los demás cursos al ver 10 horas del curso de Lucas
equivalencia_horas_lucas = 10
equivalencia_horas_minimo = equivalencia_horas_lucas * (minimo / lucas)
equivalencia_horas_maximo = equivalencia_horas_lucas * (maximo / lucas)
equivalencia_horas_promedio = equivalencia_horas_lucas * (promedio / lucas)

print(f"Ver {equivalencia_horas_lucas} horas del curso de Lucas es equivalente a ver {equivalencia_horas_minimo} horas del curso más rápido")
print(f"Ver {equivalencia_horas_lucas} horas del curso de Lucas es equivalente a ver {equivalencia_horas_maximo} horas del curso más lento")
print(f"Ver {equivalencia_horas_lucas} horas del curso de Lucas es equivalente a ver {equivalencia_horas_promedio} horas del curso promedio")
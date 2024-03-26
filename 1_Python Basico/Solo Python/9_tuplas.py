#las tuplas no pueden modificarse
t = (1, 2, 3, "a", "b", "a", "f", "e", "a")
lista = [1, 2, 3]

print(type(t))
print(type(lista))

#para acceder usas []
print(t[1])

#podes contar cuantas veces aparece algo
print(t.count("a"))
print(t.index("a"))
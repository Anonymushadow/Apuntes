from sqlalchemy import true


def mi_funcion():
    print("Hola")
    print("Como")
    print("Estas")
    print("?")

mi_funcion() 

def mi_funcion(name):
    print("Hola")
    print("Como")
    print("Estas")
    print(name)
    print("?")

mi_funcion("Nahuel")


def chequear_numero_par_en_funcion(num_list):
    for num in num_list:
        if num % 2 == 0:
            print("true")
            return True
        else:
            pass
    print("False")
    return False

chequear_numero_par_en_funcion([3, 90, 800])


def suma(*args):
    #recibe una tupla y suma todos sus elementos  los multiplica por 0,05
    return print(sum(args) * 0.05)

suma(40, 60, 73, 360)


def compras(**kwargs):
    #recibe un diccionario
    if "fruta" in kwargs:
        print("Mi fruta escogida es {}".format(kwargs["fruta"]))
    else:
        print("no hay frutas")

compras(fruta = "Manzana", vegetales = "Zapallo", bebidas = "Coca-Cola")

print("Funcion con Tuplas y Diccionarios juntos")
def duo(*args, **kwargs):
    print(args)
    print(kwargs)
    print("me gustarian {} {}".format(args[0], kwargs["comida"]))
    #toma el objeto 0 de la tupla y el value con key comida

duo(10, 30, 50, fruta = "Naranjas", comida = "Vacas", animal = "Perros")
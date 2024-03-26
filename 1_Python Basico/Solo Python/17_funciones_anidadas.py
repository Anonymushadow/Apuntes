#funcion anidada = funcion dentro de otra

name = ""

def saludo():
    name = "Eric"
    def Hola():
        print("Hola " + name)
    
    Hola()

saludo()

#variable global --> esta fuera de toda funcion y se puede usar en cualquier parte
#variable local --> esta dentro de alguna funcion y solo se puede usar en esa misma funcion 
#variable encosing --> esta dentro de una funcion pero esta funcion tiene otra funcion dentro


x = 50

def func():
    x = 200
    print(x)
print(x)
func()
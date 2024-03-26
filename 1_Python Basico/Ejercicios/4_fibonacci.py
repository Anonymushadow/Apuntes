#crear la lista de fibonacci desde 0 hasta el numero indicado

def crear_fibonacci(num):
    a, b  =  0, 1
    fibonacci_lista = [0]
    for i in range(num):
        if b > num: return fibonacci_lista
        else:
            fibonacci_lista.append(b)
            a, b = b, a+b
            
resultado = crear_fibonacci(20)
print(resultado)
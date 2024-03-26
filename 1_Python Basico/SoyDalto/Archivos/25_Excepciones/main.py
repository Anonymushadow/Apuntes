def Suma():
    while True:
        num1 = input("Ingrese un numero ")
        num2 = input("Ingrese otro numero ")
        try:
            return int(num1) + int(num2)
        except Exception as e:
            print("Bruto, pone un numero")
            print(f"Excepcion: {type(e).__name__}")
        else:
            break #else se ejecuta si no hay excepciones
        finally:
            print("saliendo del bucle")

print(Suma())
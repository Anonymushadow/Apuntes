def func():
    print("Func() en main.py")

print("nivel top en main.py")


#esto verifica si esta siendo corrido en el mismo arhivo o si fue importado (como en dos.py)
if __name__ == "__main__":
    print("Main.py esta siendo corrido directamente")
else:
    print("main.py esta siendo importado")
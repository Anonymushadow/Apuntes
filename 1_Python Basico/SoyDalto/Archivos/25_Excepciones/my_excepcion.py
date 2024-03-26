class MiExcepcion(Exception):
    def __init__(self, err):
        print(f"El error es : {err}")
    
raise MiExcepcion("Que bruto, pongale cero")
class A:
    def hablar(self):
        print("Hola desde A")
        
class B(A):
    def hablar(self):
        print("Hola desde B")
        
class C(A):
    def hablar(self):
        print("Hola desde C")

#primero va por toda la rama de B y despues por toda la rama de C
class D(B, C):
    def hablar(self):
        print("Hola desde D")
        
        
objeto = D()

objeto.hablar()

#ejecutamos hablar de la clase A por mas que el orden no lo permita
A.hablar(objeto)
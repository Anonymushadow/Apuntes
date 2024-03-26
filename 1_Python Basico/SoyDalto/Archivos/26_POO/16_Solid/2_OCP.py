#OCP
#en una clase se debe crear la funcionalidad y en las siguientes añadir la funcion en si
#se debe poder añadir funciones sin modificar la clase ya existente, la clase principal solo debe tener lo importante

class Notificador:
    def __init__(self, usuario, mensaje):
        self.usuario = usuario
        self.mensaje = mensaje
    
    # con esto obligamos a que se modifique este metodo
    def notificar(self):
        raise NotImplementedError
    
class NotificadorEmail(Notificador):
    def Notificar(self):
        #usuario deberia ser un objeto
        print(f'Enviando mensaje a {self.usuario.email}')
        

class NotificadorSMS(Notificador):
    def Notificar(self):
        #usuario deberia ser un objeto
        print(f'Enviando sms a {self.usuario.email}')
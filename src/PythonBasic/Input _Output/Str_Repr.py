class Juguete:  # las clases empiezan con MAYUSCULA
    nombre = ""
    precio = 0
    def __init__(self, nombre, precio):
        self.nombre = nombre
        self.precio = precio  # SELF es similar a this. en Java

    def __str__(self):  # __STR__ es similar al metodo TO.STRING en JAVA
        return f"\nel nombre del juguete es {self.nombre}, y su precio es {self.precio}"
    #--str-- es informal
    def __repr__(self):#Es mas tecnico o formal
        return f"Juguete{self.nombre,self.precio}"


j1 = Juguete("GOKU", 10000)
print(repr(j1))
print(str(j1),"\nes igual sin el str gracias al metodo __STR__",j1)

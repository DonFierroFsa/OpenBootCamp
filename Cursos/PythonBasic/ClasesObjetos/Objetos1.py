class Foco:
    _encendido=False;
    _tamaño="120 whats" ##Una funcion o propiedad GUIONIZADA quiere decir que Se puede pero NO SE DEBE MANIPULAR desde
                        #fuera de la clase

    def enciende(self): # SELF es por ser una CLASE DINAMICA
        self._encendido= True #shadowing dos variables del mismo nombre que no estan relacionadas

    def apaga(self):
        self._encendido=False


Foco1= Foco();
Foco1.enciende()
print(Foco1._encendido)

class Usuario: #Comparten un unico espacio de memoria. ES como una clase INSTACIANDA UNA UNICA VES
    nombre="Adrian"
    clave=123456
    def dimeElNombre():
        print(Usuario.nombre)
    def dimeLaClave():
        print(Usuario.clave)

print("estoy  en la Class USUARIO")

Usuario.dimeElNombre()
Usuario.dimeLaClave()

class juguete(): #Las HERENCIAS SON RELACIONES "IS A", "ES UN". las otras relaciones son "HAS A ", "tiene un"
    _encendido=False
    _nivelBateria="Alto"

    def __init__(self,nombre):  # Constructor con palabra reservada __init__, donde se puede agregar un parametro
        print("estoy en el constructor del juguete llamado ", nombre)   #Ej del parametro Nombre

    def niveDelBateria(self):
        return self._nivelBateria
    def enciende(self):
        self._nivelBateria="Bajo"
        self._encendido=True

    def cargaBateria(self):
        self._nivelBateria="Alto"

    def apaga(self):
        self._encendido=False

class auto(juguete):
    velocidad=0;

    def acelera(self):
        self.velocidad+=10
    def frena(self):
        self.velocidad-=5

autocarrera=auto("Velocirraptor") #El constructor se ejecuta al instaciar el objeto

print(autocarrera._nivelBateria)
print(autocarrera._encendido)
autocarrera.enciende()
print(autocarrera._encendido)
print(autocarrera._nivelBateria)
print(autocarrera.velocidad)
autocarrera.acelera()
print(autocarrera.velocidad)

##Herencia MULTIPLE
#class auto(juguete,Foco): #Esta mal pero se puede

print(dir(autocarrera)) #para ver todas las funciones de una clase
print(dir(juguete))

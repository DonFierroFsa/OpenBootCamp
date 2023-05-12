import pickle


class Auto:
    modelo = ""
    marca = ""
    potencia = 0
    encendido = False
    def __init__(self, modelo, marca, potencia):
        self.marca = marca
        self.modelo = modelo
        self.potencia = potencia

    def arranca(self):
        print("el PODEROS FIAT UNO arranco su BESTIA_MOTOR")
        self.encendido = True

miAuto = Auto("Uno", "Fiat", 320)
print(miAuto.modelo, miAuto.marca, miAuto.potencia)
miAuto.arranca()

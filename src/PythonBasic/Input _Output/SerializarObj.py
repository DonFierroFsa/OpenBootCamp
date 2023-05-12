import pickle


class Vehiculo:
    modelo = ""
    marca = ""
    potencia = 0
    encendido = False

    def __init__(self, modelo, marca, potencia):
        self.marca = marca
        self.modelo = modelo
        self.potencia = potencia

    def __str__(self):
        return f"la marca es {self.marca}, el modelo es {self.modelo}, y la potencia es {self.potencia}"

    def arranca(self):
        print("el PODEROS FIAT UNO arranco su BESTIA_MOTOR")
        self.encendido = True


miAuto = Vehiculo("Uno", "Fiat", 320)
print(miAuto)
miAuto.arranca()
f = open("MiAuto.bin", "wb")
pickle.dump(miAuto,f)
f.close()
o = open("MiAuto.bin", "rb")  # Importante que sean datos binarios RB
auto = pickle.load(o)
o.close()
print(auto)

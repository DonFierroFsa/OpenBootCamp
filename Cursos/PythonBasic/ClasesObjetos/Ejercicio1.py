class Vehiculo():
    color = "White"
    ruedas = 4
    puertas = 3


class FiatOne(Vehiculo):
    velocidad = 0
    cilindrada = 120

    def __init__(self):
        print("Se ha construido un PODERSO FIAT ONE")
    def acelerar(self):
        self.velocidad += 150
        print("aceleraste 150km/h")


fiatt=FiatOne()

print("el color es ",fiatt.color,"\nla cilindrada es ",fiatt.cilindrada)
print("la velocidad es ",fiatt.velocidad)
fiatt.acelerar()

class Rueda:
    cantidad = 4;

    def pincharRueda(self,c):
        self.cantidad-=c

class Puerta:
    cantidad = 3;


class Carroceria:
    puertas = Puerta()
    ruedas = Rueda()


class Motor:
    tipo = "Diesel"


class Auto:
    motor = Motor()
    carroceria = Carroceria()


Fiat1 = Auto()

print(Fiat1.carroceria.ruedas.cantidad)
Fiat1.carroceria.ruedas.pincharRueda(3)
print(Fiat1.carroceria.ruedas.cantidad)
#Jerarquia de Objetos sin utilizar herencia, es como mas elegante/prolijo

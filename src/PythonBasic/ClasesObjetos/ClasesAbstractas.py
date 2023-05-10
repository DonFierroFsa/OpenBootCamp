#Para utilizar clases abstractas  debo IMPORTAR ABC
from abc import ABC, abstractmethod
#Las clases abstractas contienen implementaciones parciales de una funcionalidad dejando al programador implementar la
#funcionalidad concreta.EJ SONIDO

class SerVivo(ABC):
    @abstractmethod  #Se define un metodo abstracto que las clases hijas deberan implementar
    def sonido(self):
        pass
    def siente(self):
        return print ("todos los seres vivos sienten")

class Perro(SerVivo):
    def sonido(self):
       return print ("El perro hace Guau")
class Gato(SerVivo):
    def sonido(self):
        return print( "El gato hace Miau")
class Humano(SerVivo):
    def sonido(self):
        return print("El Humano Se canta un PUNK ROCK")


pumba=Perro()
pumba.siente()
pumba.sonido()
adrian=Humano()
adrian.siente()
adrian.sonido()
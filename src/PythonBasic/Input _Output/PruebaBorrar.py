import pickle
from SerializarObj import Vehiculo

#Abro el contenido serializado de miAuto
o = open("MiAuto.bin", "rb")  # Importante que sean datos binarios RB
auto = pickle.load(o)
o.close()
print(auto)

import pickle


#Abro el contenido serializado de miAuto
o = open("MiAuto.bin","rb")#Importante que sean datos binarios RB
auto=pickle.load(o)
o.close()
print(auto.arranca(),auto.modelo,auto.marca,auto.potencia)

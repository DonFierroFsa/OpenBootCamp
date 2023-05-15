tupla=("Elemento1","Elemento2","Elemento3","Elemento4")
for elememto in tupla:
    print("el For prueba con cada elemento en ornde index")
    print(elememto)

for i in range(1,5):
    print("cuento", i)

nombres=("Adrian","Elena","Lisbel","Graciela","Mariana") ## nombres es una variable de AMBITO GENERAL
print("Esta Lisbel en la lista?")
for nombre in nombres:## nombre es una variable de AMBITO LOCAL DENTRO DEL BUCLE
    print(nombre," == nombre actual")
    if nombre=="Kristina":
        print(nombre,"esta en la lista")
        break
else:  #El ELSE se ejecuta si el for se rompe
    print("el nombre no esta en la lista")

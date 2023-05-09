tupla=("Elemento1","Elemento2","Elemento3","Elemento4")
for elememto in tupla:
    print("el For prueba con cada elemento en ornde index")
    print(elememto)

for i in range(1,5):
    print("cuento", i)

nombres=("Adrian","Elena","Lisbel","Graciela","Mariana")
print("Esta Lisbel en la lista?")
for nombre in nombres:
    print(nombre," == nombre actual")
    if nombre=="Lisbel":
        print(nombre,"esta en la lista")
        break


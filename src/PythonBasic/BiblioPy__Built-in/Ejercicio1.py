c = 0
lista=[]
while c <5:
    pais=input("Ingrese una lista de al menos 5 paises\n")

    if pais in lista:
        print("Este pais ya esta en lista ingrese otro")
        print(f"Paises ingresados {c}")
        continue
    else:
        lista.append(pais)
        c+=1
    print(f"Paises ingresados {c}")
print(sorted(lista))
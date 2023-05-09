contador=1
lista=[]
while contador<=100:
    lista.append(contador)
    contador+=1
lista.sort(reverse=True)
print (lista)
print("Fin Lista","\n  Comienza lista2")

lista2=[]
for i in range(1,101):
    lista2.append(i)

lista2=sorted(lista2, reverse=True)
print(lista2)



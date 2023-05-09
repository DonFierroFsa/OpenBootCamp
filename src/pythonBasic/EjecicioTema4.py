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

lista2.sort(reverse=True)
print(lista2)
print("Fin Lista2","\n  Comienza lista3")
lista3=[] ;contador3=1
if contador3>=1:
    lista3.append(contador3)
    contador3+=1

print("lista 3\n",lista3)

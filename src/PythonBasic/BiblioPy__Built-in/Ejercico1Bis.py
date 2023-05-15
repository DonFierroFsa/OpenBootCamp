cadena_paises = input("Ingrese una lista de paises separados por "","", y sin espacios \n")
lista_paises = cadena_paises.split(",")
lista_paises= set (lista_paises)
lista_paises=sorted(list(lista_paises))
print(lista_paises)

items = input("Introduce países separados por comas:\n")

paises = [pais for pais in items.split(",")]

print(",".join(sorted(list(set(paises)))))


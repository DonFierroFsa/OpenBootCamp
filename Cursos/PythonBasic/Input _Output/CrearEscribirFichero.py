#Crear Fichero
f = open("FicheroPrueba","w")# W crea de nuevo el archivo
#Escribir en fichero
f.write("Lista de nombres:")
#Cierro Fichero
f.close()
#Creo una funcion que agrega texto al fichero

lista=["Adrian","Elena","Lelo","Graciela","Mariana"]

def agrega(fichero,texto):
    f=open(fichero,"a") # Appen info al fichero 
    for elemento in lista:
        if not elemento.startswith("\n"):
            elemento="\n"+elemento

        f.writelines(elemento)
    f.close()
agrega("FicheroPrueba",lista)

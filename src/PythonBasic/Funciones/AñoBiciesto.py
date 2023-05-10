
def añoBiciesto(año=input("Introduce un año para saber si es Biciesto\n")):
        """Esta funcion devuelve si un año es biciesto"""
        if año.isdigit():
            año = int(año)
            if año%4==0:
                print("el año ",año," es biciesto")
            else:
                print("El año ,", año , "NO ES BICIESTO")
        else:
            print("año no valido")




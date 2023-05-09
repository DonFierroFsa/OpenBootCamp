def añoBiciesto(año=input("No introdujiste un año\n introducelo a continuacion\n")):

    if año.isdigit():
        año = int(año)
        if año%4==0:
            print("el año ",año," es biciesto")
        else:
            print("El año ,", año , "NO ES BICIESTO")
    else:
        print("año no valido")


añoBiciesto()

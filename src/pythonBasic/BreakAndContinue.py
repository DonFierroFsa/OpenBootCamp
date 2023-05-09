secreto= "clave"
clave="null";
while clave!=secreto:
    clave = input("Dime la clave\n")
    if clave!=secreto:
        print("clave incorrecta")
        otra=input("Vas a probar otra ves?repondes yes or no")
        if otra.lower()=="no":
            print("adios")
            break;
    else:print("Bienvenido")
    continue

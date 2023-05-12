#Forma VIEJA DE IMPRIMIR DATOS POR PANTALLA
numero=18
cadena="CADENA"
float=3.14
boolean=False
print("El numero es %d,  la cadena es %s, el decimal es %.3f y el boolean es %r" % (numero,cadena,float,boolean))

#FUNCION FORMAT
numero=18
cadena="CADENA"
float=3.14
bool=False
print("El numero es {},  la cadena es {}, el decimal es {} y el boolean es {}"
      .format (numero,cadena,float,bool))
print("El numero es {0},  la cadena es {1}, el decimal es {2} y el boolean es {1}"
      .format (numero,cadena,float,bool))
print("El numero es {numero},  la cadena es {cadena}, el decimal es {float} y el boolean es {bool}"
      .format (numero=numero,cadena=cadena,float=float,bool=bool))
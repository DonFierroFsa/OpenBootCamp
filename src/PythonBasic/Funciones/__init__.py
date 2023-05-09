def saluda(nombre="No me dijiste tu nombre"):
    print("Hola ", nombre)

def operacionesMatematicas(a,b):
    def suma(a,b):
        print(a+b)
    def resta(a,b):
        return a-b
    def masoperaciones(a,b):
        def multiplicacion(a,b):
            print(a*b)
        multiplicacion(a,b)

    suma(a,b)
    resta(a,b)
    masoperaciones(a,b)

def acumulador(*args):##Tengo una TUPLA
    acumulador=0
    for arg in args:
        acumulador+=arg
    print("Valor del ACUMULADOR = ",acumulador)


operacionesMatematicas(2,5)
operacionesMatematicas(b=0,a=42)##Parametros en el orden que me da la
acumulador(1,2,3,4,5,6,7,8)
saluda()
nombre=input("Dime cual es tu nombre?\n")
saluda(nombre)


def saludo3(**kwargs):
    if "nombree" in kwargs and kwargs["nombree"] == "Adrian":
        print("Hola Adrian, este es el 3 saludo")
    else:
        print("mal el parametro o el nombre")

saludo3(nombree="Adrian")

nombre="Adrian"
def crearApodo(apodo = None) :
    if apodo is None:
        apodo=input("Ingrese el apodo\n")
        global nombre
        nombre = apodo
        print("el nombre a cambiado por")
    else:
        nombre = apodo
        print("el apodo en codigo a sido ingresado y es ")

crearApodo("Chino")
print(nombre)
##



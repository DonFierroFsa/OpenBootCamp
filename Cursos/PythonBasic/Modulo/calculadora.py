import operaciones as o
def main ():
    print("Hola, estoy en main")
    a=10;b=20
    print("suma ",o.sumar(a,b),
          "\nresta ", o.restar(a,b),
          "\nmultiplicacion ",o.multiplicar(a,b),
          "\ndivicion ", o.dividir(a,b))
if __name__=="__main__":
    main()

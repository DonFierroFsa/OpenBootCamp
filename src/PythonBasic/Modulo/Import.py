##El fichero __INIT__ es necesario para importar ficheros de OTROS PAQUETES
#Por ejemplo CONTROL DE FLUJO  NO TIENE INIT, por lo que NO PUEDO IMPORTAR SUS FICHEROS
from PythonBasic.Funciones.AñoBiciesto import añoBiciesto as ab
#import PythonBasic.Funciones.AñoBiciesto
def main():
    print("Hola,esto es Año Biciesto desde el fichero Import")
    ab()
if __name__=="__main__":
    main()

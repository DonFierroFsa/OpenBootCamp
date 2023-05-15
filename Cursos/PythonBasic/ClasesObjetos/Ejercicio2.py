class Alumno():
    nombre= None
    nota= None

    def dimeNombre(self):
        Nombre = input("Dime el Nombre\n")
        self.nombre=Nombre
    def calificacion(self):
        Nota = input("Dime tu nota")
        nota=int(Nota)
        if nota<=5:
            print(self.nombre," Desaprobaste, BURRO")
        else:
            print(self.nombre," Aprobaste ,anda a scaviar")
Adrian=Alumno()

Adrian.dimeNombre()
Adrian.calificacion()

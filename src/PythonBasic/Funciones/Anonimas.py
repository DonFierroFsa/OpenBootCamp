"""las funciones anonimas son funciones abreviada, es decir, facilita escribir funciones de una manera mas corta
Se utilizan en funciones cortas o simples"""

"""def saludo( nombre = "No me dijiste tu nombre"):

    print("Hola ",nombre.upper())
saludo()
nombre =input("Dime tu nombre")
saludo(nombre)"""

saludoAnonima= lambda nombre="no me dijiste tu nombre",apellido="y no me diste tu apellido": \
    print("hola", nombre, apellido)
saludoAnonima()
saludoAnonima("Adrian")
saludoAnonima("Adrian", " Rvira")
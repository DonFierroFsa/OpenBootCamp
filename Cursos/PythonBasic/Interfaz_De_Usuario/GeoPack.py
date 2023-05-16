#Geo PACK sirve para posicionar etiquetas, botones, etc
import tkinter # Sirve para crear una etiqueta

window = tkinter.Tk()  # Creo la ventana

# El primer parametro en casi todos los WG es en que ventana va
label_saludo = tkinter.Label(window,  # Cree el label pero no lo mostre
                             text="HOLA ADRIAN",
                             bg="red",
                             fg="blue")
label_saludo.pack(ipadx=50, ipady=75,
                  fill="x")  # La muestro usando Geometria, en este caso PACK(agolpa las cosas unas con otras)

label_adios = tkinter.Label(window,
                            text="Adios Adrian",
                            bg="blue",
                            fg="black")
label_adios.pack(ipadx=75, ipady=200, fill="both")#Fill es para rellenar, fill=x, fill=both

labe_expand=tkinter.Label(window,text="EXPAND \n se queda en medio",bg="grey",fg="yellow")
labe_expand.pack(expand=True)

label_otro = tkinter.Label(window, text="Alineado izquierda")
label_otro.pack(side="left",ipadx=50,ipady=50)

window.mainloop()  # Bucle de ventana

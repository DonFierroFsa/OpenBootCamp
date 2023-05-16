import tkinter
from tkinter import ttk
from tkinter.messagebox import showinfo


def eleccion_equipo ():
    showinfo( title= "TU EQUIPO ES ", message= selected.get())
def reiniciar ():
    selected.set(None)

window = tkinter.Tk()

window.title("Equipos Argentinos")

pregunta = tkinter.Label(window, text="Cual es tu equipo de futbol?", ).pack()

selected = tkinter.StringVar()
style = ttk.Style()
style.configure("River.TRadiobutton", foreground='red', background="white",padding=18)
style.configure("Boca.TRadiobutton", foreground='yellow', background="blue",padding=10)
r1 = ttk.Radiobutton(window, text="River Plate", variable=selected, value="River Plate", style="River.TRadiobutton")
r1.pack()

r2 = ttk.Radiobutton(window, text="Boca Juniors", variable=selected, value='Boca Juniors',
                     style="Boca.TRadiobutton").pack()

respuesta = tkinter.Button(window,text="Acepto este equipo para toda mi vida",command= eleccion_equipo).pack()

reinciar = tkinter.Button(window, text="REINICIAR SELECCION",command=reiniciar).pack()

window.mainloop()


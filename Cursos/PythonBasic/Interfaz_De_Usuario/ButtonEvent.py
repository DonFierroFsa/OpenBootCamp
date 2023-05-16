import tkinter
from tkinter import ttk

window = tkinter.Tk()


def saludar(event):
    print("HELLO WORLD")


def salir(event):
    window.quit()


boton = tkinter.Button(window, text="haz click", bg="yellow")
boton.pack(ipadx=50, ipady=50, padx=50, pady=50, fill="x")
boton.bind("<Button-1>", saludar)

botonSalir = tkinter.Button(window, text="SALIR", bg='red')
botonSalir.pack()
botonSalir.bind("<Double-1>", salir)

window.mainloop()

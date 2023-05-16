import tkinter

window = tkinter.Tk()

tile= tkinter.Label(window,text="LOS MEJORES JUGADORES DE LA HISTORIA").pack()
lista=["Ronaldiño","Maradona","Messi","Pele"]

lista=tkinter.StringVar(value=lista)
listabox=tkinter.Listbox(window,listvariable=lista).pack()




window.mainloop()
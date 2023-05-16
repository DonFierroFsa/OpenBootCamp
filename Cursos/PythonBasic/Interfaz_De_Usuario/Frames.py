import tkinter
from tkinter import ttk

window = tkinter.Tk();

window.columnconfigure(0, weight=1)
window.columnconfigure(1,weight=3)

frame = ttk.Label(window, relief='sunken')# Frame sirve para agrupar labels, SUNKEN ES UN BORDE
frame.grid(column=0,row=1,sticky=tkinter.W,padx=20,pady=20)
label = ttk.Label(frame, text="HOLA ESTOY EN EL \n FRAME")
label1 = ttk.Label(frame, text="LABEL2")

label.grid(column=0,row=0,sticky=tkinter.W, padx=50, pady=50)
label1.grid(column=0,row=1,sticky=tkinter.W, padx=50, pady=50)




window.mainloop()
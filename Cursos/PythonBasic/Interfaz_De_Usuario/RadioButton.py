import tkinter
from tkinter import ttk

def mifuncion():
    print("CliKAdo")

window = tkinter.Tk()

window.columnconfigure(0, weight=1)

selected = tkinter.StringVar()
r1 = ttk.Radiobutton(window, variable=selected, text="Adrian", value=1)
r2 = ttk.Radiobutton(window, variable=selected, text="Elena", value="DOS")

r1.grid(column=0, row=0, sticky=tkinter.N, pady=5, padx=5)
r2.grid(column=0, row=1, sticky=tkinter.N, pady=5, padx=5)

selected2 = tkinter.StringVar()
acepta = ttk.Checkbutton(window, text="ACEPTA?", variable=selected2,command= mifuncion)
acepta.grid(column=0, row=2)

window.mainloop()

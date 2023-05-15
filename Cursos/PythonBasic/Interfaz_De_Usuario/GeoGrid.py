# Grid Similar a Hoja de Calculo o MATRIS
import tkinter
from tkinter import ttk  # TTK es para importar estilos

window = tkinter.Tk()

window.columnconfigure(0, weight=1)  # configuro la cantidad de columnas y filas que voy a tener
window.columnconfigure(1, weight=3)
## Username
# Username Label
username_label = tkinter.Label(window, text="USER NAME:",bg="blue")#USE TKINTER en ves de TTK para bg BLUE
username_label.grid(column=0, row=0,  # Elijo en que coordenanda esta
                    sticky=tkinter.W,  # Elijo su ubicacion como si fuera una brujula: "East","West","North",etc
                    padx=5, pady=5)  # Elijo el tamaño
# Username Entry
username_entry = ttk.Entry(window)
username_entry.grid(column=1, row=0, sticky=tkinter.W, padx=5, pady=5)
##Password
# Password Label
password = ttk.Label(window, text="PASSWORD")
password.grid(column=0, row=1, sticky=tkinter.W, pady=7, padx=7)
# Password Entry
password_entry = ttk.Entry(window, show="*")
password_entry.grid(column=1, row=1, sticky=tkinter.W, padx=7, pady=7)
##LogginButon
loggin_button = ttk.Button(window, text="Loggin")
loggin_button.grid(column=1, row=3, sticky=tkinter.N, padx=10, pady=10)

window.mainloop()

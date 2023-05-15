#FIJA LOS LABELS EN POSICIONE ABSOLUTAS dadas por coordenadas en PIXELES
import tkinter

window = tkinter.Tk()

label1= tkinter.Label(window,text="LABEL 1",bg="red",fg="white")
label1.place(x=0,y=20)

label2=tkinter.Checkbutton(window,text="BUTTON")
label2.place(relx=0.5,rely=0.5)



window.mainloop()
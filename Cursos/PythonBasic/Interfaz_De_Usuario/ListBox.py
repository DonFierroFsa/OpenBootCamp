import tkinter

window = tkinter.Tk()

window.columnconfigure(0,weight=1)
window.columnconfigure(1,weight=3)

lista=["Adrian","Elena","Lisbel","Lujan","Lilian"]
lista=tkinter.StringVar(value=lista)
listbox=tkinter.Listbox(window,listvariable=lista,)
listbox.grid(column=0,row=0,sticky=tkinter.N,padx=0,pady=40)

window.mainloop()
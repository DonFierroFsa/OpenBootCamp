#Funciona con cualquier elemento iterable
lista=[1,2,3,4,5,6,7,8,9]

"""En ves de la funcion lambda se puedo definir una mas compleja 
def mifuncion(): #La funcion debe devolver True or False 
    if x % 2 !=0:
        return True
        
#filtro los resultados impares"""
resultado=filter(lambda x:x%2!=0,lista) #Filtra los elementos
#Por Cada elemento de la lista se invoca a la funcion pasandole como parametro el elemento de la lista
#Si la devolucion de la funcion es True, filter mantiene el elemento
print(tuple(resultado))
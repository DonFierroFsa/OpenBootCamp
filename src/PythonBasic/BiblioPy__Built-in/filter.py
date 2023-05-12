#Funciona con cualquier elemento iterable
lista=[1,2,3,4,5,6,7,8,9]

"""En ves de la funcion lambda se puedo definir una mas compleja
def mifunacion():
    if x % 2 !=0:
        return True
        
#filtro los resultados impares"""
resultado=filter(lambda x:x%2!=0,lista) #Filtra los elementos
print(tuple(resultado))
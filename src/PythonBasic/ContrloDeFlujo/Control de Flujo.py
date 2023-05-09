a=5;b=6;c=9;
d=3

#Almceno las posibilidades en una variable Boolean; las condiciones pueden ser ANIDADAS

resultado=a<b;
print(resultado,"prueba 1")

resultado = a<b and a<c and a<d;
print(resultado,"prueba 2")

# XOr cuando uno de los dos sea falso

print("T xor T",True ^ True)
print ( "T xor F", True ^ False)
print ("F xor T",False ^ True)
print("F xor F", False ^ False)



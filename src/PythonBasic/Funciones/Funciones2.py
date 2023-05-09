def operaciones(a,b):
    return a+b,a-b,a*b,a/b;

suma,resta,multiplicacion,divicion=operaciones(2,8)
print(suma,resta,multiplicacion,divicion)
tupla=operaciones(4,6)
print(tupla)
print("La suma es ", tupla[0])


def acumulador(**kwargs):
    inicial = kwargs["inicial"] if "inicial" in kwargs else 0
    final = kwargs["final"] if "final" in kwargs else inicial
    acumulado = 0
    for i in range(inicial, final+1):
        acumulado += i

    return acumulado

print(acumulador(inicial=4,final=10))
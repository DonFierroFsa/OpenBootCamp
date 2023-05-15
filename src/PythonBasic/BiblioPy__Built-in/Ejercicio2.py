from functools import reduce

lista=[1,2,3,4,5,6,7,8,9]
"""def impares(x):
    if x % 2 != 0:
        return True
impares=list(filter(impares,lista))"""
impares=list(filter(lambda x:x%2!=0,lista))
print(f"la lista de impares es {impares}")
resultado= reduce(lambda a,b:a+b,impares)
print(resultado)
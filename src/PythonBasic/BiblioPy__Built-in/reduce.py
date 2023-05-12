from functools import reduce

lista = [1, 2, 3, 4, 5, 6]
r = reduce(lambda a, b: a + b, lista) #reduce los elementos iterables a UNO SOLO, aplicandop la funcion
print(r)
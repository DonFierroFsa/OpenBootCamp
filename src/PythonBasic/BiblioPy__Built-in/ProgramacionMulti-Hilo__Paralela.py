import _thread
import time


def hora_actual(nombre_hilo, delay):
    c = 0
    while c < 5:
        time.sleep(delay)
        c += 1
        print(f" es el {nombre_hilo}, el la hora es  {time.ctime(time.time())}")

_thread.start_new_thread(hora_actual,("hilo 1", 1))##LA COMA DESPUES DE LLAMAR A LA FUNCION ES MUY IMPORTANTE
_thread.start_new_thread(hora_actual,("hilo 2", 2))


while True:
    pass

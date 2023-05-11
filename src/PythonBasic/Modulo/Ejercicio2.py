import time
from time import localtime

def Alarma(horaSalida=int(input("Ingrese hora de salida\n"))):
    while True:
        if localtime().tm_hour == horaSalida :
            print("ES HORA IR A CASA")
        elif localtime().tm_hour < horaSalida:
            hRestantes=horaSalida-localtime().tm_hour
            minRestantes= 60-localtime().tm_min
            segRestantes=60-localtime().tm_sec
            print("Tiempo para irse a acasa =","\nHoras ",hRestantes,"\nMin ",minRestantes,"\nSeg ",segRestantes)
        elif localtime().tm_hour>horaSalida:
            hSobrantes = localtime().tm_hour - horaSalida
            minSobrantes = localtime().tm_min
            segSobrantes =  localtime().tm_sec
            print("Timepo extra trabajado =","\nHoras ",hSobrantes,"\nMin ",minSobrantes,"\nSeg ",segSobrantes)
        time.sleep(5)

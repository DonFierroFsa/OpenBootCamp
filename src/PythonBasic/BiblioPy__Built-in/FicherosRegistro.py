import logging
# un logger van trazando lo que hace el programa, obviamente los mensajes no se muestran por salida
# #Por Niveles Info--error--warring--critical
#Logging.info("INFO")
#No se muestra nada, hay que configurar los niveles
logging.basicConfig(level=logging.WARNING)#INFO EN MAYUSCULAS
logging.warning("WARRING")
logging.info("Nueva Info")
logging.error("ESTE ES UN ERROR")
logging.critical("CRITICAL")
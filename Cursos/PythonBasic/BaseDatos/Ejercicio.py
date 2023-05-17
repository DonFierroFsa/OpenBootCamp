import sqlite3



#Creo y conecto con el archivo Alumnos.db
conn = sqlite3.connect("Alumnos.db")

cursor = conn.cursor()

#Crep la tabla y Utilizo  IF NOT EXIST  ademas de AUTOINCREMENT para el ID
cursor.execute("CREATE TABLE IF NOT EXISTS alumnos  (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, apellido TEXT  NOT NULL)")

#Muestro el nomnre de la tabla
print((cursor.execute("SELECT name FROM sqlite_master ")).fetchall())

#Muestro los nombres de las columnas
print((cursor.execute("SELECT name FROM PRAGMA_TABLE_INFO('alumnos') ")).fetchall())

#Muestro los alumnos aunque aun no estan cargados
print((cursor.execute("SELECT * FROM alumnos")).fetchall())

data_alumnos=[("Adrian","Rivira"),("Mariana","Rivira"),("Graciela","Rivira"),("Elena","Zaragoza"),
("Lisbel","Rivira"),("Diego","Leguizamon"),("Agustina","Dionisi"),("Alejandro","Miño")]

#Aclaro que voy a insertar solo dos elementos, dejando fuera el ID que se incrementa solo
cursor.executemany("INSERT INTO alumnos ('nombre','apellido')VALUES (?,?)",data_alumnos)
conn.commit()
query=cursor.execute("SELECT * FROM alumnos WHERE nombre='Adrian'")
print(query.fetchall())



cursor.close()
conn.close()
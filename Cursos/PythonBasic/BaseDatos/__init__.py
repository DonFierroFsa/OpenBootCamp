import sqlite3

myapp = sqlite3.connect("myapp.db")  # Creo mi .DB y me conecto a ella

cursor = myapp.cursor()

cursor.execute("CREATE TABLE usuarios(id INTEGER PRIMARY KEY,nombre TEXT NOT NULL,edad INTEGER NOT NULL)")
res = cursor.execute("SELECT name FROM sqlite_master ") #Verifico que la tabla exista
print(res.fetchone() is True) #Imprimo el nombre de la tabla por pantalla, si no existe devuelve None o False

cursor.execute("""INSERT INTO usuarios VALUES
               (0,'Adrian',32),
               (1,'Mariana',36)""") ###Agrego valores a la tabla
#cursor.commit()#Cierro la operacion

print ((cursor.execute("Select * from usuarios")).fetchall()) #fetchall es la papa si y solo si sobran recursos

data =[(2,"Elena", 65),
       (3,"Lisbel",65),
       (4,"Graciela",38),]
cursor.executemany("INSERT INTO usuarios VALUES(?,?,?)",data)


print(cursor.execute("SELECT * FROM usuarios ORDER BY edad").fetchall())
cursor.close()
myapp.close()

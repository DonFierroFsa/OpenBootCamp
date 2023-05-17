import sqlite3


def main():
    nombre = input("Introduce el nombre")
    apellido = input("Introduce el apellido")
    conn = sqlite3.connect("Alumnos.db")
    cursor = conn.cursor()
    query = cursor.execute(f"SELECT * FROM alumnos WHERE nombre like'%{nombre}%' and apellido like '%{apellido}%'")
    print(query.fetchall())
    cursor.close()
    conn.close()


if __name__ == "__main__":
    main()

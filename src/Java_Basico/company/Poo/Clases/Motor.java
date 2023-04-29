package Java_Basico.company.Poo.Clases;

public class Motor {

    String nombre;
    int cv;

    @Override
    public String toString() {
        return "Motor{" +
                "nombre='" + nombre + '\'' +
                ", cv=" + cv +
                '}';
    }

    public Motor(String nombre, int cv) {
        this.nombre = nombre;
        this.cv = cv;
    }
}

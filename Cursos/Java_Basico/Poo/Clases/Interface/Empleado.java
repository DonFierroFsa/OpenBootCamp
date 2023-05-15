package Java_Basico.Poo.Clases.Interface;

public class Empleado {

    String nombre;
    int edad;
    boolean activo;

    @Override
    public String toString() {
        return "Empleado{" +
                "nombre='" + nombre + '\'' +
                ", edad=" + edad +
                ", activo=" + activo +
                '}';
    }

    public Empleado(String nombre, int edad, boolean activo) {
        this.nombre = nombre;
        this.edad = edad;
        this.activo = activo;
    }


}

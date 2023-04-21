package Curso_de_Introducción_a_la_programación;

public class Ejercicios_tema_8 {

    public static void main (String[] args) {

        Persona Alumno = new Persona();
        Alumno.setEdad(32);
        Alumno.setNombre("Adrian");
        Alumno.setTelefono("3704094515");
        System.out.println(Alumno.getNombre());
        System.out.println(Alumno.getEdad());
        System.out.println(Alumno.getTelefono());// Si alguien lo ve me encataria aprender a cambiar
        // el formato Sstring por uno Long en TELEFONO

    }
}

class Persona {
    private int edad;
    public void setEdad(int edad){
        this.edad = edad;
    }
    public int getEdad (){
        return this.edad;
    }
    private String nombre;
    public void setNombre(String nombre){
        this.nombre= nombre;
    }
    public String getNombre(){
        return this.nombre;
    }
    private  String telefono;
    public void setTelefono(String telefono){
        this.telefono=telefono ;
    }
    public String getTelefono() {
        return this.telefono;
    }

}

package Curso_de_Introducción_a_la_programación;

public class Ejercicio_tema_9 {
    public static void main (String [] args){
        Cliente ClienteAdrian = new Cliente("Adrian",32,"3705440913",1000);
        Trabajador EmpleadoAdrian = new Trabajador();
        EmpleadoAdrian.salario = 200;
        System.out.println("el cliente\n"+ClienteAdrian.nombre+"\n"+"tien un credito por \n"+ClienteAdrian.credito+"\n"+
                "su salario es de \n"+EmpleadoAdrian.salario);

    }
}

class Person {
    int edad;
    String nombre;
    String telefono;
}

class Cliente extends Person{
    int credito;
    public Cliente(String nombre, int edad, String telefono, int credito){
        this.nombre=nombre;
        this.edad=edad;
        this.telefono=telefono;
        this.credito=credito;
    }
}
class Trabajador extends Person{
    int salario;
}


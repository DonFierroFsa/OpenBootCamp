package Java_Basico.BasicBasic;

import java.util.Scanner;

public class Funciones {

    public static void main(String[] args) {

        //las funciones son agrupaciones de sentencias que pueden ser reutilizadas por nuestra app
        HolaMundo("Adrian");

        HolaMundo("Adrian","Rivira");

        ivaCalculator();
    }
    private static void HolaMundo(String name) {

        System.out.println("Hola " + name);
    }
    /*Modificadores
    public vale para todo
    private Vale para la misma clase
    protected Vale para el mismo paquete
    Funciones.HolaMundo para acceder desde otra clase o paquete

    Funciones SOBRECARGADAS: cuando la funcion se usa varias veces, por ejemplo con diferentes parametros
    */
    private static void HolaMundo(String name,String apellido) {

    System.out.println("Hola " + name +" "+ apellido
    +"\nTe estoy saludando desde una fuincion sobrecargada");
    }

    private static void ivaCalculator(){
        System.out.println("Introduce el precio SIN IVA");
        Scanner escaner = new Scanner(System.in);
        double precio =  Double.parseDouble(escaner.next());
        double precioIva= precio*1.21;
        System.out.println("el precio iva incluido es "+ precioIva);
    }

}
    
package Java_Basico.company;

public class Funciones {

    public static void main(String[] args) {

        //las funciones son agrupaciones de sentencias que pueden ser reutilizadas por nuestra app
        HolaMundo("Adrian");

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


}
    
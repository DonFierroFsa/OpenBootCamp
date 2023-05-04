package Java_Basico.TiposDeDatosComplejos;

import java.util.Vector;

public class Vectores {
    public static void main(String[] args) {
        Vector<Integer> vectorUno = new Vector(1,4);
        vectorUno.add(10);
        vectorUno.add(20);
        vectorUno.add(30);
        System.out.println("Datos del vector \n"+vectorUno);
        System.out.println("Tamaño del vector "+vectorUno.size()+"\nCapacidad del vector "+vectorUno.capacity());
        Vector<Integer> vectorDos = new Vector<>();
        vectorDos.add(10);
        vectorDos.add(20);
        vectorDos.add(30);
        boolean resultado = vectorUno.equals(vectorDos);
        System.out.println("Los vectores son iguales \n"+resultado);

        for (int i: vectorUno){
            System.out.println( "El valor del vector " + i);
        }
        //Para acceder al valor de un array debo usar el metodo GET(i);
        for(int i = 0; i<vectorUno.size();i++){
            System.out.println("En la posicion "+ i+"\n el valor del vector es "+ vectorUno.get(i));
        }
        vectorUno.trimToSize(); // AJUSTA EL TAMAÑO DEL VECTOR
    }
}

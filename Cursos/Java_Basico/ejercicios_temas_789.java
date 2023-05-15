package Java_Basico;

import java.io.*;
import java.util.ArrayList;
import java.util.Vector;

public class ejercicios_temas_789 {
    public static void main(String[] args) {

        /* ARRAYS */
        int[] array = {1, 2, 3, 4};
        for (int i : array) {
            System.out.println(i);
        }
        Integer[][] arrayBiDi = {{1, 2, 3}, {10, 20, 30}};
        for (int i = 0; i < arrayBiDi.length; i++) {
            for (int j = 0; j < arrayBiDi[i].length; j++)
                System.out.println("valor del Array = " + arrayBiDi[i][j] + "\nposicion [i][j]" + "=" + "[" + i + "]" + "[" + j + "]");
        }
        //Vectors
        Vector<String> nombres = new Vector<>(5, 5);
        nombres.add("Adrian");
        nombres.add("Lisbel");
        nombres.add("Mariana");
        nombres.add("Elena");
        nombres.add("Graciela");
        for (String i : nombres) {
            System.out.println("Los nombres son " + i);
        }
        for (int i = 0; i < nombres.size(); i++) {
            System.out.println("En la posicion " + i + " el nombre es " + nombres.get(i));
        }
        //Eliminamos el segundo y tercer elemento
        nombres.remove(1);//Elimino Lisbel
        nombres.remove(2);//Elimino Mariana
        System.out.println(nombres);
        /*??
        Indica cuál es el problema de utilizar un Vector con la capacidad por defecto si tuviésemos 1000 elementos para ser añadidos al mismo.
        Rta.
        El problema es que cada ves que se llena la capacidad por defecto que es 10, se crea un array subyacente con capacidad incrementada por
        defecto en 10, es decir que para llegar a 100, se tendran que hacer 100 vectores subyacentes, y la copia de cada uno consume recursos
        innecesariamente*/

        //ArrayList
        ArrayList<String> listaNombres = new ArrayList<>();
        listaNombres.add("Adrian");
        listaNombres.add("Graciela");
        listaNombres.add("Mariana");
        listaNombres.add("Fernando");
        //Recorriendo el Array
        for (String i : listaNombres) {
            System.out.println(i);
        }
        for (int i = 0; i < listaNombres.size(); i++) {
            System.out.println("Posicion= " + i + " Nombre: " + listaNombres.get(i));
        }
        ArrayList<Integer> listaEnteros = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            listaEnteros.add(i + 1);
            System.out.println(listaEnteros.get(i));
        }
        for (int i = 0; i < listaEnteros.size(); i++) {
            if (listaEnteros.get(i) % 2 != 0) {
                listaEnteros.remove(i);
                System.out.println(listaEnteros.get(i));
            }
        }
        //Funcion DividePorCero --- TRY CATCH
        divide(6, 0);

        //InputStream y PrintStream
        copiaFichero("Insterte Ruta de Fichero a copiar", "Inserte ruta de fichero copia");


    }

    public static void divide(int a, int b) {
        try {
            int resultado = a / b;
            System.out.println(resultado);
        } catch (ArithmeticException e) {
            System.out.println("Esto no puede hacerse");
        } finally {
            System.out.println("Demo De codigo");
        }
    }

    public static void copiaFichero(String fileIn, String fileOut) {
        try {
            InputStream fichero = new FileInputStream(fileIn);
            try {
                byte[] datos = fichero.readAllBytes();
                PrintStream copiaFichero = new PrintStream(fileOut);
                copiaFichero.write(datos);
                System.out.println("El Fichero se copio correctamente");
            } catch (IOException e) {
                System.out.println(e.getMessage());
            }
        } catch (FileNotFoundException e) {
            System.out.println(e.getLocalizedMessage());
        }

    }


}

package Java_Basico.EntradaSalida;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Scanerr   {
    public static void main(String[] args) {

        boolean ok=false;
        do {
            Scanner scanner = new Scanner(System.in);
            System.out.println("Ingrese dos numeros para sumarlos");

            try {

                int a = scanner.nextInt();
                int b = scanner.nextInt();
                ok=true;
                int suma = a + b;
                System.out.println("El resultado de la suma es " + suma);
                scanner.close();//MUY IMPORTANTE CERRAR FICHERO porque el ordenador se queda sin FILEDESCRIPTOR

            } catch (InputMismatchException e) {
                System.out.println("El error es " + e);
            }
        }while(!ok);
    }
}

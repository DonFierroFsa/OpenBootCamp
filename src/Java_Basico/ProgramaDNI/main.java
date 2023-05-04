package Java_Basico.ProgramaDNI;

import java.io.FileNotFoundException;
import java.io.PrintStream;
import java.util.HashMap;
import java.util.InputMismatchException;
import java.util.Scanner;

public class main {
    public static void main(String[] args) {
        Scanner mainScanner = new Scanner(System.in);
        String respuesta = null;
        String nombre;
        HashMap nombreDni = new HashMap<String, Long>();
        String rutaFichero;

        do {
            Scanner scanner = new Scanner(System.in);
            System.out.println("Insterte nombre completo");
            try {
                nombre = scanner.nextLine();
                System.out.println("Inserte Numero de DNI");
                Long dni = scanner.nextLong();
                nombreDni.put(nombre, dni);
                System.out.println("Desea agregar otro nombre?, responda Si o No");
                respuesta = scanner.next();
            } catch (InputMismatchException e) {
                System.out.println("Escribiste mal el nombre o el Dni ");
            }
        } while (respuesta.equals("Si"));

        System.out.println("Desea ver la lista de Nombres y DNI actual?, responda Si o No");
        String verLista = mainScanner.next();
        if (verLista.equals("Si")) {
            for (Object par : nombreDni.entrySet()) {
                System.out.println(par);
            }
        }

            System.out.println("Desea copiar los datos en un fichero?,responda Si o no");
            String copiarFichero = mainScanner.next();
            if (copiarFichero.equals("Si") || copiarFichero.equals("SI") || copiarFichero.equals("si")) {
                System.out.println("Inserte ruta al fichero");
                rutaFichero = mainScanner.next();
                try {
                    PrintStream fichero = new PrintStream(rutaFichero);
                    fichero.printf(String.valueOf(nombreDni));
                    System.out.println("La info fue copiada al fichero" + rutaFichero);
                } catch (FileNotFoundException e) {
                    System.out.println("La info no pudo ser copiada" + e);
                }
            }
    }
}


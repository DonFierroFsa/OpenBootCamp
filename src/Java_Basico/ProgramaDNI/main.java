package Java_Basico.ProgramaDNI;

import java.util.HashMap;
import java.util.InputMismatchException;
import java.util.Map;
import java.util.Scanner;

public class main {
    public static void main(String[] args) {
        Scanner mainScanner = new Scanner(System.in);
        String respuesta = "";
        String nombre = null;
        HashMap nombreDni = new HashMap<String, Long>();
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
    }
}

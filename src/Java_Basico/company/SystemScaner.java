package Java_Basico.company;

import java.util.Scanner;

public class SystemScaner {
    public static void main(String[] args) {

        Scanner escaner = new Scanner(System.in);

        System.out.println("Introduce TU nombre");
        String nombre = escaner.next();
        System.out.println("Tu nombre es "+ nombre);

        System.out.println("Por favor "+nombre+" Introduce tu edad");
        int edad = Integer.parseInt(escaner.next());
        if(edad<26){
            int añosrestantes= 26-edad;
            System.out.println("Aún eres joven te quedan "+ añosrestantes+ " años de juventus");
        }else {
            System.out.println("Ya eres viejo tienes "+ edad);
        }
    }
}

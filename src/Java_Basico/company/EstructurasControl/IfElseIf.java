package Java_Basico.company.EstructurasControl;

import java.util.Scanner;

public class IfElseIf {
    public static void main(String[] args) {
        System.out.println("Ingrese su nombre de usuario");
        Scanner escaner = new Scanner(System.in);
        String usuario = escaner.next();
        //Usuario Autorizado grado 1 == Adrian, Usuario autorizado grado 2 == Lisbel
        if(usuario.equals("Adrian")){
            System.out.println(" Autorizacion Usuario grado 1");
        }else if ( usuario.equals("Lisbel")){
            System.out.println(" Autorizacion Usuario grado 2");
        }else {
            System.out.println("Usuario no autorizado");
        }
    }
}

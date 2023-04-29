package Java_Basico.company.EstructurasControl.Repeticion;

import java.util.Scanner;

public class Switch {
    public static void main(String[] args) {

        System.out.println("Ingrese su nombre de usuario");
        Scanner escaner = new Scanner(System.in);
        String usuario = escaner.next();
        //Usuario Autorizado grado 1 == Adrian, Usuario autorizado grado 2 == Lisbel

        switch(usuario){
            case "Adrian":
                System.out.println("Usuario Autrizado Grado 1");
                break;
            case "Lisbel":
                System.out.println("Usuario Autorizado Grado 2");
                break;
            default:
                System.out.println("Usuario NO AUTORIZADO");


        }


    }
}

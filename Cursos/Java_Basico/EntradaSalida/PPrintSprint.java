package Java_Basico.EntradaSalida;

import java.io.FileNotFoundException;
import java.io.PrintStream;


public class PPrintSprint {
    public static void main(String[] args) {
        System.out.println("Esto es un PrintStream, SON SALIDAS");
        try{
            PrintStream info = new PrintStream("C:\\Users\\USUARIO\\OneDrive\\Documentos\\Lelo bomba aybal.txt");
            info.print("Borre todo este archivo sin querer, al probar PrintStrint con Java en intellyJ");
            System.out.print(info);
            info.close();//MUY IMPORTANTE CERRAR FICHERO porque el ordenador se queda sin FILEDESCRIPTOR
        }catch (FileNotFoundException e){
            System.out.println(e);
        }

    }
}

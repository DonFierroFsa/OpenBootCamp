package Java_Basico.EntradaSalida;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.lang.invoke.VarHandle;

public class InPutStream {
    public static void main(String[] args) {
        try {
            InputStream fichero = new FileInputStream("C:\\Users\\USUARIO\\OneDrive\\Documentos\\Lelo bomba aybal.txt");
            //FileInPutStream me devuelve secuencia Bytes por lo tanto debo almacenarlo en un array de  bytes

            try {
                /*byte[] datox = new byte[10];
                int dato = fichero.read(datox);
                while (dato !=-1){
                    System.out.print(datox.toString());
                    dato = fichero.read(datox);
                }*/
                byte[] datos = fichero.readAllBytes();
                for(byte dato : datos){
                    System.out.print((char) dato);
                fichero.close();//MUY IMPORTANTE CERRAR FICHERO porque el ordenador se queda sin FILEDESCRIPTOR
                }
            }catch (IOException e){
                System.out.println("Error al leer fichero "+ e.getLocalizedMessage());
            }
        }catch (FileNotFoundException e){
            System.out.println("El error al cargar el fichero "+ e.getLocalizedMessage());
        }



    }
}

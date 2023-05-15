package Java_Basico.EntradaSalida;

import java.io.*;

public class BufferInPutStream {
    public static void main(String[] args) {
        try {
            InputStream fichero = new FileInputStream("C:\\Users\\USUARIO\\OneDrive\\Documentos\\Lelo bomba aybal.txt");
            BufferedInputStream ficheroBuffer = new BufferedInputStream(fichero);// Para leer de a trozos, como el que le gusta a eña;
            try {
                //int dato= ficheroBuffer.read();
                int dato=0;
                while ( dato !=-1){
                    System.out.print((char) dato);
                    dato= ficheroBuffer.read();
                    fichero.close();//MUY IMPORTANTE CERRAR FICHERO porque el ordenador se queda sin FILEDESCRIPTOR
                    ficheroBuffer.close();//MUY IMPORTANTE CERRAR FICHERO porque el ordenador se queda sin FILEDESCRIPTOR
                }
            }catch (IOException e){
                System.out.println("Error al leer fichero Buffer"+e.getLocalizedMessage());
            }
        }catch (FileNotFoundException e){
            System.out.println("Error en carga de fichero"+ e.getLocalizedMessage());
        }
    }
}

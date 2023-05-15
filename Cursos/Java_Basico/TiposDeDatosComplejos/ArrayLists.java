package Java_Basico.TiposDeDatosComplejos;

import java.sql.Array;
import java.util.ArrayList;

public class ArrayLists {
    public static void main(String[] args) {

        ArrayList<String> lista= new ArrayList();
        lista.add("Elemento A");
        lista.add("Elemento B");
        lista.add("Elemento C");
        System.out.println("Elementos de la lista \n"+ lista);
        lista.remove("Elemento A");
        lista.remove("Elemento BB");// No ocurre nada
        System.out.println("EElementos de la lista \n"+ lista);

        for(String i : lista){
            System.out.println(i);
        }
        for(int i =0; i< lista.size();i++){
            System.out.println("Posicion del "+lista.get(i)+"= "+i);
        }
        //Dos metodos para convertir Listas en Arrays
        String array[]=lista.toArray(new String[0]);
        for(String i:array){
        System.out.println(i);}

        String array2[]= new String[lista.size()];
        for (int i = 0; i<lista.size();i++){
            array[i]=lista.get(i);
        }
        //Fin de metodos similares
    }
}

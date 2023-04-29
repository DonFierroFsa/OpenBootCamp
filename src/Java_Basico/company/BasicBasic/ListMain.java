package Java_Basico.company.BasicBasic;

import java.util.ArrayList;
import java.util.List;

public class ListMain {
    public static void main(String[] args) {
        //Los arrays list nos permite trabajar con datos DE FORMA DINAMICA

        List<String>ListaNombre= new ArrayList<>();

        ListaNombre.add("Adrian");ListaNombre.add("Elena");ListaNombre.add("Lisbel");
        System.out.println(ListaNombre);
        for(String nombre:ListaNombre){
            System.out.println(nombre);
        }

    }
}

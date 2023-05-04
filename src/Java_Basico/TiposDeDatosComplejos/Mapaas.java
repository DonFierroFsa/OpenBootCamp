package Java_Basico.TiposDeDatosComplejos;


import java.util.HashMap;
import java.util.Map;

public class Mapaas {
    public static void main(String[] args) { // Simil DICT en Python

        HashMap<String,Long> mapa= new HashMap<>();
        mapa.put("celular1",3704094513L);
        mapa.put("celular2",3705084843L);

        System.out.println(mapa);
        System.out.println(mapa.get("celular1"));
        System.out.println(mapa.keySet());
        System.out.println(mapa.values());

        //For Each necesario para leer elemento por elemento
        for(Long value:mapa.values()){
            System.out.println(value);
        }

        for(Map.Entry<String,Long>par: mapa.entrySet()){
            System.out.println(par);
        }
        for(Map.Entry<String,Long>par: mapa.entrySet()){
            System.out.println(par.getKey()+" marca el numero "+ par.getValue());
        }



    }
}

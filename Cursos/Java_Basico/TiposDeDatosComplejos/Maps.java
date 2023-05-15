package Java_Basico.TiposDeDatosComplejos;

import java.util.HashMap;
import java.util.Map;

public class  Maps {

    public static void main(String[] args) {

        Map<String, Integer> dni = new HashMap<>();

        dni.put("Adrian", 35678818);
        dni.put("Lisbel", 11945424);

        for (Integer value : dni.values()) {
            System.out.println(value);
        }
        for (String key : dni.keySet()) {
            System.out.println(key);
        }
        for (Map.Entry<String, Integer> par : dni.entrySet()) {
            System.out.println(par);
        }
        for (Map.Entry<String, Integer> par : dni.entrySet()) {
            System.out.println(par.getKey() + " Su DNI es " + par.getValue());
        }


    }
}

package Java_Basico.TiposDeDatosComplejos;

public class TipoString {
    public static void main(String[] args) {
        System.out.println("Metodo lenght()");
        String cadena = "MensaJe";
        int cadenaLen = cadena.length();
        System.out.println("La longitud de cadena es " + cadenaLen+"\n");

        System.out.println("Metodo toLowerCase()");
        String cadenaLower  = cadena.toLowerCase();
        System.out.println(cadenaLower+"\n");

        System.out.println("Metodo toUpperCase()");
        String cadenaUpper = cadena.toUpperCase();
        System.out.println(cadenaUpper+"\n");

        System.out.println("Metodo startsWith()");
        String busqueda="Cad";
        boolean resultado=cadena.startsWith(busqueda);
        if(resultado){
            System.out.println("La cadena empieza por "+ busqueda+"\n");
        }else{
            System.out.println("la cadena no empieza por "+ busqueda+"\n");
        }

        System.out.println("Metodo charAt()");

        for (int i=0;i<cadena.length();i++){
            char x = cadena.charAt(i);
            System.out.println(x);
        }
    }
}

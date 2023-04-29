package Java_Basico.company.EstructurasControl;

public class EjercicionTema3 {
    public static void main(String[] args) {

        String concat="";
        String[] nombres={"Adrian","Lisbel","Mariana","Graciela","Elena"};

        for(int i =0; i< nombres.length; i++){
            concat+="  "+nombres[i]+"  ";
        }
        System.out.println(concat);
    }
}

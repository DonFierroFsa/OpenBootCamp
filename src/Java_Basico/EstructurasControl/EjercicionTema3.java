package Java_Basico.EstructurasControl;

public class EjercicionTema3 {
    public static void main(String[] args) {

        String concat="";
        System.out.println(concat.getClass().getSimpleName());
        String[] nombres={"Adrian","Lisbel","Mariana","Graciela","Elena"};

        for(int i =0; i< nombres.length; i++){
            concat+="  "+nombres[i]+"  ";
        }
        System.out.println(concat);
        //Curiosidad de saber el tipo de variable de CONCAT despues de concatenar, pero es solo un String largo
        // y no un array como NOMBRES
        System.out.println(concat.getClass().getSimpleName());
        System.out.println(nombres.getClass().getSimpleName());
    }
}

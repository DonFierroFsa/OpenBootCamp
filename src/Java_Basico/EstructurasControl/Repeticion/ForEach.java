package Java_Basico.EstructurasControl.Repeticion;

public class ForEach {
    public static void main(String[] args) {

        String[] nombres={"Adrian","Lisbel","Mariana","Graciela","Elena"};
        int index=1;

        for(String nombre: nombres){
            System.out.println(nombre+"  Posicion  "+index++);
        }
    }
}

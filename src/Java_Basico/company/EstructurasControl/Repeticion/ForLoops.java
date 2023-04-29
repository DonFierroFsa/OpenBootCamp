package Java_Basico.company.EstructurasControl.Repeticion;

public class ForLoops {

    public static void main(String[] args){

        for(int i = 0; i<4;i++){
            System.out.println("esta ves i ="+ i);
        }
        String[] nombres={"Adrian","Lisbel","Mariana","Graciela","Elena"};
        for(int i=0; i< nombres.length ; i++){
            System.out.println("Los nombres son "+nombres[i]);
        }
    }
}

package Java_Basico.company;

public class While_Continue_Break {

    public static void main(String [] args){
        int i = 0;
        while( i < 6){
            System.out.println("Blucle While ES Similar a for\n iteracion numero "+ i);
            i++;
            if (i==3)
                continue;
            if(i==4)
                break;//Rompe Saliendo de la Estructura de Control
        }
    }
}

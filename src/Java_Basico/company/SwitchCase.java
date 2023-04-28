package Java_Basico.company;

public class SwitchCase {

    public static void main(String[] args){

        String weather="VERDURA";

        switch(weather){

            case "Rainy":
                System.out.println("Use an Umbrellla");
                break;
            case "Sunny":
                System.out.println("Use a hat");
                break;
            default :
                System.out.println("Watch weather channel again");
        }
    }
}

package Java_Basico.company;

public class Try_Catch_Finally {
    public static void main(String[] args) {

        try {
        int resultado= 5/0;
        } catch (ArithmeticException e){
            System.out.println("Ocurrio un error");
            e.printStackTrace();
        } finally {
            System.out.println("El programa continua ocurra o no el error");
        }
        }
}

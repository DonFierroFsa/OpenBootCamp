package Ejercicios_tema_4;

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {
        int resultado =suma(1,4,5);
        car clio=new car();
        clio.SumarPuerta();

        System.out.println("the pluss is "+resultado);
        System.out.println(" Door's numbers of clio  "+clio.puertas);
    }

    public static int suma (int a, int b, int c){
        return a+b+c;
    }

}

class car{
    public int puertas =5;
    public void SumarPuerta(){
        this.puertas++;
    }
}

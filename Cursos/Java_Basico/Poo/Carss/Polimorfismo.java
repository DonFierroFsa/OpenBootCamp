package Java_Basico.Poo.Carss;

public class Polimorfismo {
    public static void main(String[] args) {

        ElectricCar amarok = new ElectricCar();
        //Polimorfismo
        Car hilux = new ElectricCar("","hilux","","");
        Car fiat1 = new ElectricCar();

        if ( fiat1 instanceof ElectricCar){
        System.out.println(hilux+"\nEs un electrico");}
            else
        System.out.println( hilux +"\nNo es electrico");

    }
}

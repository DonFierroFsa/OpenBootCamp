package Java_Basico.company.Poo.Carss;

public abstract class Car {

    //ATRIBUTOS
    String color;String model;String size ; int velocidad;
    //Constructor:: Metodos que permiten crear objetos de esta clase.

    public Car(String color, String model, String size){
        this.color=color;
        this.model=model;
        this.size= size ;
    }
    public Car() {
    }
    //Metodos..Comportamiento
    public void acelerar(int aceleracion){
        velocidad+=aceleracion;
    }
        @Override
    public String toString() {
        return "Car{" +
                "color='" + color + '\'' +
                ", model='" + model + '\'' +
                ", size='" + size + '\'' +
                ", velocidad=" + velocidad +
                '}';
    }
    public static void main(String[] args) {
        Car myCar = new ElectricCar("Blue", "FIAT", "Small","ElectricMotor");

        System.out.println(myCar);
        myCar.color = "White";
        System.out.println(myCar);
        System.out.println(myCar.velocidad);
        myCar.acelerar(170);
        System.out.println("El fiat va a "+myCar.velocidad);

        ElectricCar fiat = new ElectricCar();
        System.out.println(fiat);

        ElectricCar clio = new ElectricCar("red","clio","small","xtz");
        System.out.println(clio);

        fiat.acelerar(50);
        System.out.println("El fiat elecetrico acelera\n "+fiat.velocidad);




    }

}

package Java_Basico.company.Carss;

public class ElectricCar extends Car {
    String motorElectrico;
    public ElectricCar(){
        this.motorElectrico=motorElectrico;
    }
    public ElectricCar(String color, String model, String size, String motorElectrico){
        super(color, model, size);
        this.motorElectrico=motorElectrico;
    }
    @Override
    public void acelerar(int aceleracion) {
        aceleracion/=2;
        super.acelerar(aceleracion);
    }
    @Override
    public String toString() {
        return "ElectricCar{" +
                "motorElectrico='" + motorElectrico + '\'' +
                ", color='" + color + '\'' +
                ", model='" + model + '\'' +
                ", size='" + size + '\'' +
                ", velocidad=" + velocidad +
                '}';
    }

}

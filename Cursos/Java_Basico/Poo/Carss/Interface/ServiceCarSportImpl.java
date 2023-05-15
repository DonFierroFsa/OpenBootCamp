package Java_Basico.Poo.Carss.Interface;

import Java_Basico.Poo.Carss.ElectricCar;
import Java_Basico.Poo.Carss.Car;

public class ServiceCarSportImpl implements ServiceCar{

    @Override
    public Car crearAuto() {
        System.out.println("Este es un Auto de Carreras");
        return new ElectricCar();
    }
}

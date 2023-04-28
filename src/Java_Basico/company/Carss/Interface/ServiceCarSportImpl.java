package Java_Basico.company.Carss.Interface;

import Java_Basico.company.Carss.Car;
import Java_Basico.company.Carss.ElectricCar;

public class ServiceCarSportImpl implements ServiceCar{

    @Override
    public Car crearAuto() {
        System.out.println("Este es un Auto de Carreras");
        return new ElectricCar();
    }
}

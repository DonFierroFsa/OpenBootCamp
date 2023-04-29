package Java_Basico.company.Poo.Carss.Interface;

import Java_Basico.company.Poo.Carss.Car;
import Java_Basico.company.Poo.Carss.ElectricCar;

public class ServiceCarSportImpl implements ServiceCar{

    @Override
    public Car crearAuto() {
        System.out.println("Este es un Auto de Carreras");
        return new ElectricCar();
    }
}

package Java_Basico.company.Carss.Interface;

import Java_Basico.company.Carss.Car;
import Java_Basico.company.Carss.ElectricCar;

public class ServiceCarClassicImpl implements ServiceCar { /*Las clases que implentan interfaces estan
                                obligados a dar un cuerpo a los metodos de Interface*/
    @Override
    public Car crearAuto() {
        System.out.println("Este es un auto clasico");
        return new ElectricCar();

    }




}

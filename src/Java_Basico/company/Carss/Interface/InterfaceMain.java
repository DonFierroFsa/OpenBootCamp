package Java_Basico.company.Carss.Interface;

public class InterfaceMain {

    public static void main(String[] args) {

        ServiceCar SportElectirCar = new ServiceCarSportImpl();
        ServiceCar ClasicElectricCar= new ServiceCarClassicImpl();
        SportElectirCar.crearAuto();
        ClasicElectricCar.crearAuto();
    }
}

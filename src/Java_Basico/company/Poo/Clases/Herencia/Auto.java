package Java_Basico.company.Poo.Clases.Herencia;

import Java_Basico.company.Poo.Clases.Motor;
import Java_Basico.company.Poo.Clases.Vehiculo;

public class Auto extends Vehiculo{
    public Auto() {
    }

    public Auto(String fabricante, String model, int velocidad, Motor motor) {
        super(fabricante, model, velocidad, motor);
    }
}

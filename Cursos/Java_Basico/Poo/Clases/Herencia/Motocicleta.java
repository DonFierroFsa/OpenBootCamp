package Java_Basico.Poo.Clases.Herencia;

import Java_Basico.Poo.Clases.Motor;
import Java_Basico.Poo.Clases.Vehiculo;

public class Motocicleta extends Vehiculo {
    int numRuedas;

    public Motocicleta (){};

    @Override
    public String toString() {
        return "Motocicleta{" +
                "numRuedas=" + numRuedas +
                ", fabricante='" + fabricante + '\'' +
                ", model='" + model + '\'' +
                ", velocidad=" + velocidad +
                '}';
    }

    public Motocicleta(String fabricante, String model, int velocidad, Motor motor, int numRuedas) {
        super(fabricante, model, velocidad, motor);
        this.numRuedas=numRuedas;
    }
}

package Java_Basico.company.Poo.Clases;

public abstract class Vehiculo {  //Vehiculo es una clase ABSTRACTA, no puese instanciarse, solo sus clases herederas

    //1 Atributos

    public String fabricante;
    public String model;

    public int velocidad;

    Motor motor;

    //2 Constructores

    public Vehiculo(){};

    @Override   //Metodo to String creado automaticamente
    public String toString() {
        return "Vehiculo{" +
                "fabricante='" + fabricante + '\'' +
                ", model='" + model + '\'' +
                ", velocidad=" + velocidad +
                ",motor=" + motor +
                '}';
    }

    //Sobrecarga de contrsuctor
    public Vehiculo(String fabricante, String model, int velocidad,Motor motor){
        this.fabricante=fabricante;
        this.model=model;
        this.velocidad=velocidad;
        this.motor=motor;
    }
    //3 Metodos

    public void acelerar(int aceleracion){
        if(0<aceleracion&&aceleracion<100) {
            velocidad += aceleracion;
            System.out.println("\nEl "+ Vehiculo.this.model+ " Se acelero "+aceleracion+
                    "\nLa velocidad actual de "+Vehiculo.this.model+" es "+ Vehiculo.this.velocidad);
        }else{
            System.out.println(aceleracion + " es un valor de aceleracion invalido");
        }
    }

}

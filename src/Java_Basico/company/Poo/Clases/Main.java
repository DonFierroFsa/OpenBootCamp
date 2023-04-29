package Java_Basico.company.Poo.Clases;

import Java_Basico.company.Poo.Clases.Herencia.Auto;
import Java_Basico.company.Poo.Clases.Herencia.Motocicleta;

public class Main {
    public static void main(String[] args) { //el modificador STATIC quiere decir que el metodo pertence a la clase MAIN
        //por lo que no necesito crear un objeto para EJECUTARLO

       //Instancio el objeto Vehiculo sin parametros
        Vehiculo corolla = new Auto();

        //Creo un motor
        Motor motorclio=new Motor("XTZ",120);

        //Creo o INSTANCIO el objeto Vehiculo con parametros
        Vehiculo clio= new Auto("Renault","Clio",0,motorclio);
        System.out.println(clio);

        //Pruebo el metodo aceleracion
        clio.acelerar(120);
        System.out.println(clio);
        clio.acelerar((30));
        System.out.println(clio);

        //Creo un Objeto SubClase o Hija   y SOBRECARGO Vehiculo

        Vehiculo c90=new Motocicleta("Honda","c90",100,null,2);
        System.out.println("\n"+c90);
        c90.acelerar(13);



    }
}

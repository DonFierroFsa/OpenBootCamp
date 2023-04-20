package Curso_de_Introducción_a_la_programación;

public class Ejercicios_tema_4 {

    public static void Ejercicios_tema_4(String[] args){
        int numero= 0;
        if (numero <0){
            System.out.println("El numero "+numero+" es negativo");
        } else if(numero>0){
            System.out.println("El numero "+numero+ " es positivo");
        } else {
            System.out.println("El numero "+ numero+ " es CERO");
        }

        while (numero<3 ){
            System.out.println(numero);
            numero ++;
        }
        do{
            System.out.println("ESte numero "+numero+" corresponde al bucle DoWhile");
            numero++;
        }while (numero<1);
        for(int i=0;i<=3;i++){
            System.out.println("Bucle FOR "+ i);
        }
        var estacion = "Octubre";
        switch (estacion){
            case "Vernao":
                System.out.println("Es "+ estacion);
                break;
            case "Invierno":
                System.out.println("Es "+estacion);
                break;
            case "Otoño":
                System.out.println("Es "+estacion);
                break;
            case "Primavera":
                System.out.println("Es "+estacion);
                break;
            default:
                System.out.println("Esta no es una estacion");
                break;
        }

    }
}

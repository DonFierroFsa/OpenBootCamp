package Java_Basico.TiposDeDatosComplejos;

public class TipoArray {
    public static void main(String[] args) {
        int arrayUno[]= new int [3];
        arrayUno[0] =1;
        arrayUno[1]=2;
        arrayUno[2]=3;

        for (int i : arrayUno){
            System.out.println(i);
        }
        System.out.println("arrayDos tipo String, inicializado en un solo paso");

        String arrayDos[]={"Adrian","Lisbel","Elena","Mariana","Graciela"};
        for(String i : arrayDos){  //Dentro de la variable i tipo String guardo el Nombre temporalmente
            System.out.println(i);
        }
        System.out.println("longitud del arrayDos "+ arrayDos.length);
        //Este for me sirve para obtener la posicion del Array
        for(int i=0;i<arrayDos.length;i++){
            System.out.println("posicion "+ i+" para el nombre "+ arrayDos[i]);
        }
        //Primer [*] Fila   Segundo[*] Columna;
        int arrayBi[][]= new int [2][4];

        int arrayBiDos[][]={
                {1,2,3,4},
                {10,20,30,40}
        };

        for(int i = 0; i<arrayBiDos.length;i++){
            for(int j = 0; j<arrayBiDos[i].length;j++)
            System.out.println("i= "+ i+" j= "+ j+"\n"+arrayBiDos[i][j]);
        }
    }
}

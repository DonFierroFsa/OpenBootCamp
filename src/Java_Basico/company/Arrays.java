package Java_Basico.company;

public class Arrays {
    public static void main(String[] args) {

        int[] array= new int[10];
        int[] array1= {1,2,3,4,5,6,7,8,9};
        int[] array2={9,8,7,6,5,4,3,2,1};

        for(int i =0; i<array.length;i++){
            System.out.println(array[i]);
        }

        for(int i:array2){
            System.out.println(i);
        }
    }
}

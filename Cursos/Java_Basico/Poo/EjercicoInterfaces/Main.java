package Java_Basico.Poo.EjercicoInterfaces;

public class Main {

    public static CocheCRUD coche = new CocheCRUDImpl();

    public static void main(String[] args) {

        coche.findAll();
        coche.save();
        coche.delete();
    }

}

package Java_Basico.Poo.EjercicoInterfaces;

public class CocheCRUDImpl implements CocheCRUD{


    public void save() {
        System.out.println("Metodo SAVE");
    }

    public void findAll(){
        System.out.println("Metodo findAll");
    }

    public void delete(){
        System.out.println("Metodo Delete");
    }
}

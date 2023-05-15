package Java_Basico.Poo.Clases.Interface;

public class Main { // Una Interface es una clase que sirve para proveer ABSTRACCION, para que un codigo
    //que depende de otro codigo no este acoplado.
    //La ventaja principal de una INTERFACE es NO MODIFICAR EL MAIN, el main SOLO DEPENDE DE LA INTERFACE y lo que se
    //modifica es lo que esta bajo la interface, es decir, NO HAY ACOPLAMIENTO DEL MAIN CON OTRAS CLASES
   public static EmpleadoCrud empleadoCrud = new EmpleadoCrudMySQL();
    public static void main(String[] args) {

        Empleado juanito = new Empleado("Juan Alvarez",32,true);
        Empleado marisaGonzales = new Empleado("Marisa Gonzales",22,true);

        empleadoCrud.save(juanito);
        empleadoCrud.save(marisaGonzales);

        System.out.println(empleadoCrud.findAll());

        empleadoCrud.delete(marisaGonzales);

        System.out.println(empleadoCrud.findAll());

    }
}

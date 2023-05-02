package Java_Basico.Poo.Clases.Interface;

import java.util.List;

public interface EmpleadoCrud {

    void save(Empleado empleado);
    List<Empleado>findAll();
    void delete (Empleado empleado);
}

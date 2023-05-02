package Java_Basico.Poo.Clases.Interface;

import java.util.ArrayList;
import java.util.List;

public class EmpleadoCrudMySQL implements  EmpleadoCrud{

    //Crud: Creat  Read  Update  Delete

    List<Empleado> listaEmpleados = new ArrayList<>();
    @Override
    public void save(Empleado empleado) {
        listaEmpleados.add(empleado);
    }

    @Override
    public List<Empleado> findAll() {
        return listaEmpleados;
    }

    @Override
    public void delete(Empleado empleado) { listaEmpleados.remove(empleado);

    }
}

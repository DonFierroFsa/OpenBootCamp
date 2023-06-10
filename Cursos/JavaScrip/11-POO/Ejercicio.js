class Estudiante {
    constructor(nombre,asignatura1,asignatura2,asignatura3) {
        this.nombre=nombre;
        this.asignatura=[asignatura1,asignatura2,asignatura3];
    }
    obtenerDatos(){
        return objet={
            nombre:this.nombre,
            asignatura1:this.asignatura
        }
    }
}

const adrian = new Estudiante("Adrian","JavaScrip","HTML","CSS")

console.log(adrian)
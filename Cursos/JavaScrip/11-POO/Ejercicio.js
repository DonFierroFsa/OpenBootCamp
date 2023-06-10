class Estudiante {
    constructor(nombre,asignatura1,asignatura2,asignatura3) {
        this.nombre=nombre;
        this.asignatura=[asignatura1,asignatura2,asignatura3];
    }
    obtenerDatos(){
        const  object={
            nombre:this.nombre,
            asignatura1:this.asignatura
        }
        return object;
    }
}

const adrian = new Estudiante("Adrian","JavaScrip","HTML","CSS")

console.log(adrian)

console.log(adrian.obtenerDatos())
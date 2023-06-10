class persona {
    constructor(nombre,apellido,edad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
    }
    saludo(){
        console.log("Hola mi nombre es ",this.nombre) 
    }
}

const adrian = new persona ("Adrian","Rivira","32");
console.log(adrian);
adrian.saludo();

const mariana = new persona("Mariana","Rivira",36);
console.log(mariana);
mariana.saludo();
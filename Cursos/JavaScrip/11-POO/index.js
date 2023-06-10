const persona ={
    nombre:"Adrian",
    apellido:"Rivira",
    edad:32,
    saludo: function (){
        console.log("Hola soy ",persona.nombre)
    },
}

console.log(persona)
persona.saludo();

//Factory Function
const dios = (nombre, apellido,edad) => {
    return {
        nombre:nombre,
        apellido:apellido,
        edad,
        saludo: function () {
            console.log("hola soy ",nombre)
        }
    }
};

const adrian = dios("lisbel","rivira",32);
console.log(adrian)
adrian.saludo();
//Modulos: una parte de codigo que se puede reutilizar en diferentes partes de nuestro programa

//Exportar/Importar modulos
//1-CommonJs (por defecto)-- require
//2-Import ES6 - import

const moduloMatematicas = require("./modulos/matematicas.js")
//const factorial = moduloMatematicas.factorial;
const { factorial, suma, eleva} = moduloMatematicas;
const fact3= factorial(10)
// const {factorial, suma} = require("./modulos/matematicas.js")

let fact2 = factorial(7);
console.log(fact2)
const fact = moduloMatematicas.factorial (5)
console.log (fact)

const sum = moduloMatematicas.suma(12,90)
console.log (sum) 


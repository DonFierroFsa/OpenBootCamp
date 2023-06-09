//import { suma, factorial,nombre }from "./modulos/matematicas.js";
import * as matematicas from "./modulos/matematicas.js"

const sum = matematicas.suma(1,3);
console.log(sum);

console.log(matematicas.factorial(4));

console.log(matematicas.nombre)
console.log(matematicas.eleva(2,5))

import getAtuthor,{libro} from "./modulos/literatura.js";

console.log(getAtuthor())//Cada archivo solo puede tener un EXPORT DEFAULT, sin envargo puede tener todos los export function
console.log(libro)

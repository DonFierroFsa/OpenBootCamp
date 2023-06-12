/* Ejercicio ;
Crea un archivo JS que contenga las siguientes líneas
*/
// - Una cadena de texto con tu Nombre
const nombre = 'Adrian  ';

// - Otra cadena de texto con tu Apellido
const apellido = 'Rivira    ';

// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = nombre.concat(apellido);
console.log(estudiante);
// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
estudiante = estudiante.toUpperCase();
console.log(estudiante);
// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
estudianteMinus = estudiante.toLowerCase();

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
const cant_caracteres = estudiante.length;

// - Una variable que contenga la primera letra del Nombre
const first_letter = nombre[0];
console.log(nombre.charAt(0));

// - Otra variable que contenga la última letra del Apellido
const last_letter = apellido.charAt(apellido.length - 1);
console.log(apellido.charAt(apellido.length - 1));

// - Una cadena de texto que elimine los espacios de la variable "estudiante"
console.log(estudiante.length);
const estudiante_sin_espacio = estudiante.trim();
console.log(estudiante_sin_espacio.length);

// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
console.log(estudiante.match(/ADRIAN/g));

const bool = estudiante.includes('ADRIAN');
console.log(bool);

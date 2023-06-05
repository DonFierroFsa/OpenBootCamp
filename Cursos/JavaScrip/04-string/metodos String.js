let nombre= "Adrian";

let saludo = `Hola ${nombre} 
este es otro parrafo gracias a las comillas invertidas
es muy util`;
console.log(saludo)

//Metodos mas utilizados con Strings

let str="Hola soy un string"
//Longitud de una cadena con length
console.log(str.length)

//Obtener partes de cadena de caracteres
//slice()...substring()...subtr("este esta medio obsoleto")...

let slice_str= str.slice(3,18)
console.log(slice_str)

let substring_str= str.substring(3,18)
console.log(substring_str)

let subtr_str= str.substr(3,15)
console.log(subtr_str)

//Reemplazar contenido

let cadena = "Hola mi nombre es Adrian, este es mi perro"

cadena=cadena.replace("Adrian","Lisbel");
console.log(cadena)

cadena = cadena.replace("mi","REEMPLAZADO")
console.log(cadena)
//cambio todas las variables
console.log(cadena.replace(/mi/g,"REEEEEEEMPLZADO"))

let input = "Sagitario"
let db = "sagitario"
console.log(input==db)
console.log(db.toLowerCase==input.toLowerCase)
console.log(db.toUpperCase==input.toUpperCase)

//Cadena concat

let strg2=" Texto concatenado a cadena"

console.log(cadena.concat(strg2)
)

console.log(cadena+strg2)

numero="4",numero2="2";
console.log(numero+numero2)

console.log(`${cadena} ${numero}`)

// Eliminar espacios al inicio y al final

let strg3="                                    Este es un texto con mucho ESPACIO      "
console.log(strg3.trim().length)
console.log(strg3.length)
console.log(strg3.trimStart().length)
console.log(strg3.trimEnd().length)

//Obtemer un caracter em [X] posicion

let strg4=" A B C D E F G H I J"

console.log(strg4.charAt(5))
console.log(strg4[5])

//Posicion de una palabrta dentro de una string

let nombre_completo="Adrian Lisbel Rivira--Andres Lisbel Rivira";
console.log(nombre_completo.indexOf("Lisbel"))
console.log(nombre_completo.indexOf("ANDRES"))
console.log(nombre_completo[7])
console.log(nombre_completo.lastIndexOf("Lisbel"))

let text="Pera Pera pera Manzana Manzana Manzana Manzana"

console.log(text.match(/Pera/g), "No cuenta las Peras con P minuscula")

console.log(text.includes("Uva"),"no hay peras, pero hay manzanas", text.includes("pera"))

console.log(text.startsWith("Pera"))
console.log(text.startsWith("Pera pera"))
console.log(text.endsWith("Manzana"))
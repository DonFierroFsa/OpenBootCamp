/*Enunciado del ejercicio:

Crea un archivo JS que contenga las siguientes líneas*/

//- Una variable que contenga tu altura en centímetros (entero)
let altura_cm= 190;

//- Una variable que contenga tu altura en metros (número de coma flotante)
let altura_m=1.90;

//- Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso_kg=95.4;

//- Una variable que contenga tu altura en metros redondeada hacia arriba
let round_altura_m= Math.round(altura_m);
console.log(round_altura_m);

//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let round_peso_kg = Math.floor(peso_kg);
console.log(round_peso_kg)

/*- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" 
es igual al máximo valor que se puede obtener en Javascript*/

let equal = Number.MAX_VALUE+1===Number.MAX_VALUE;
console.log(equal)
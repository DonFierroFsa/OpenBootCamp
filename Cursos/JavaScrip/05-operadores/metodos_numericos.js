//Operador .valueOF() Obtener valores numericos a partir de literales

let a = 2; let b = new Number(3);
console.log(b);
console.log(typeof(b));
console.log(a+b);
console.log(b.valueOf());

let strg= new String("Hola soy un string");
console.log(strg.valueOf());
console.log(typeof(strg));

//NaN (Not a Number) - Infinity

let n = Number ("Adios");
console.log(isNaN(n));

let numerador=23; let divisor= 0;
console.log(numerador/divisor)
console.log(divisor/divisor);

//Convertir String a valores Numericos
let num = "5.23";
let num2= 1.07;
//Number
console.log(num+num2);
console.log(Number(num)+num2);

//parseInt

console.log(parseInt(num),"redondea a un entero");
console.log(parseFloat(num2), "toma en cuenta la coma")

//Numero Hexadecimales (BASE 16)

let numHex = "0x3a5b7";//Siempre empieza por 0x
console.log(parseInt(numHex));
console.log(parseInt(numHex, 16));

//Obtener valores maximo y minimo en Js, el paso minimo es epsilon

let epsilon = Number.EPSILON;
let min = Number.MIN_VALUE;
let max =  Number.MAX_VALUE;

console.log(epsilon);
console.log(min);
console.log(max);

console.log(2**1023);
console.log(2**1024);




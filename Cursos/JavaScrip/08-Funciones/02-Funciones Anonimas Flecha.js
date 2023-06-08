//Funciones tipo flechas  Funciones Anonimas

const array = [1,2,3,4,5,6];

//Funcion clasica
var arrayX2 = array.map(function(valor){
    return valor*2
})
console.log(arrayX2);

//Funcion tipo flecha..Su valor se guarda en una variable o constante mas frecuentemente
//Solo se pueden acceder despues de que han sido inicializadas
var arrayX3 = array.map(valor => valor*3);
console.log(arrayX3);

const elDoble = ( valor => valor*2);
console.log(elDoble(2));

let arrayX4 = arrayX2.map(elDoble);
console.log(arrayX4)


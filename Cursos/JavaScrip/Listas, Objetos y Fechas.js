//lista o array

const array=[1,"adrian", true]

const array2= new Array(3,"elena",false)
console.log(array2)
array2[1]="Lisbel"
console.log(array2)

//Objetos

const celular={
    marca:"samsung",
    modelo:"s20",
    otras:{
        color:"negro",
        tamaño:"chico"
    },
    array:[1,"Adrian",true],
    "atributo-raro":4
}
console.log(celular.otras.color)

//Fecha  libreria de apoyo Moment.js

const ahora = new Date();

console.log(ahora)

var fecha_valores= new Date(2023,11,18);
console.log(fecha_valores)

dia = fecha_valores.getDate()
mes = fecha_valores.getMonth()+1
año = fecha_valores.getFullYear()

console.log(dia,mes,año)

var nombre = "Adrian";
var edad = 23;
var Eres_desarrollador = false;
console.log(typeof "Eres-desarrollador");

fecha_nacimiento = new Date(1990,11,18);
console.log(fecha_nacimiento);

libro_favorio={
    titulo:"Orange Clock",
    autor:"Anthony Burgess",
    publicacion: new Date(1962,5,16),
    url:"https://es.wikipedia.org/wiki/La_naranja_mec%C3%A1nica",
}
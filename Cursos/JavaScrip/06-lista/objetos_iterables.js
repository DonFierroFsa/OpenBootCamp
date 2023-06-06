//.some()

const array = [1,2,3,5,53,12,12,32,3,23,24,2,434,23,41,234,12]

let res = array.some(valor => valor >32);
console.log(res);

let exist = array.some(value => value == 12);
console.log(exist)

let obj_list=[
    {nombre:"Adrian", edad:32},
    {nombre:"Lisbel",edad:64},
    {nombre:"Elena",edad:64},
    {nombre:"Mariana",edad:36},
]

exist = obj_list.some(name => name.nombre == "Adrian")
console.log (exist) 

//Como obtener una lista a traves de un objeto iterable

let saludo = "Hola soy Adrian";

let saludo_array= Array.from(saludo);
console.log(saludo_array);

//keys

let key= array.keys();

let ar_key= Array.from(key);
console.log(ar_key)
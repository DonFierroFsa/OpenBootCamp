//Crea un archivo llamado objetos.js que contenga las siguientes líneas

//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
var objet = {nombre:"Adrian",apellido:"Rivira",edad:32,altura:"190cm",eresDesarrollador:false};

//- Una variable que obtenga tu edad a partir del objeto anterior
var my_age = objet.edad;
console.log(my_age, typeof(my_age));

//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
let list = Object.values(objet);
console.log(list)
let list2 = Object.entries(objet);
console.log(list2)
let list_friends = [
    {name:"Daniel",apellido:"Mendoza",edad:26,altura:"175cm",apodo:"Wallas"},
    {name:"Federico",apellido:"Leiva",edad:29,altura:"169",apodo:"Wape"}
]

//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
let sort_list = list_friends.sort((a,b) => b.edad-a.edad);
console.log(sort_list)

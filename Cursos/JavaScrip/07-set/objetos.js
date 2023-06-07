//Trabajando con objetos

//Definimos objeto
const objet = {
    id:4,
    nombre:"juan",
    apellido:"gonzalez",
    isDeveloper: true,
    cursos:["0 a Dev","Data Scientist"],
    "Juego Favorito":"Age of Empires II",
}
console.log(objet["Juego Favorito"])
console.log(objet["nombre"])
console.log(objet.nombre)

//Acceder a propiedades a traves de variables
let prop = "isDeveloper"
console.log(objet[prop])

//Espacio en memoria, 
let objet2= objet;
objet2.nombre="Adrian";
//Comparten espacio en memoria...Esto no pasa en variables primitivas.
console.log(objet.nombre);

//Copiar un Objeto dentro de otro

let objet3= {...objet};
console.log(objet3)
objet3.nombre="Pepito";
console.log(objet3.nombre);

///////////////////////////////////////////
//Ordenar lista de objetos en funcion de una propiedad
let movie_list=[
    {title:"Lo que el viento se llevo", year:1939},
    {title:"Titanic",year:1997},
    {title:"Moana",year:2016},
    {title:"El efecto mariposa",year:2004},
    {title:"Ted",year:2012}    
]
console.log(movie_list);

movie_list.sort((a,b) => a.title-b.title);
movie_list.sort((a,b) => a.year-b.year);
console.log(movie_list)


//Crea un archivo JS que contenga las siguientes líneas

//- Una variable que contenga la lista de la compra (mínimo 5 elementos)
let buy_list = ["bread", "milk","meat","eggs","rice"];

//- Modifica la lista de la compra y añádele "Aceite de Girasol"
buy_list.push("Aceite de girasol");
console.log(buy_list);

//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
buy_list.pop();
console.log(buy_list)

//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
let films = [
    {title:"Orange Clocl", director:"Stanley Kubrick",date: 1971},
    {title:"The Wall", director:"Alan Parkr", date:1982},
    {title:"Suburbia", director:"Penelope Spheeris",date:1983},
    {title:"Dragon Ball: Episodio de Bardock", director:"Yoshihiro Ueda",date:2011}
]

//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
let films_post_2010=films.filter(year => year.date>2010)
let films_2010= films.filter(year => {
    if(year.date>2010){
        return true
    }
});
console.log(films_post_2010);
console.log(films_2010);

//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const directors = films.map((name,indice) => name.director+" "+indice)
console.log(directors)

//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titles = films.map(title => title.title);
console.log(titles)

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
let directors_titles = directors.concat(titles);
console.log(directors_titles)

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
let directors_titles2 = [...directors,...titles];
console.log(directors_titles2)
console.log( ...directors,...titles)
console.log(directors_titles==directors_titles2)
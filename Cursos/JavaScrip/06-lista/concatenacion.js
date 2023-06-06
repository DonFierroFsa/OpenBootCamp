//Concatenación y obtención de fragmentos de listas

//Unir dos listas
const saludos=["hola", "adions","saludos","bienvenido"];
const nombres=["Adrian","Lisbel","Elena","Graciela"];

console.log(saludos.concat(nombres));

//Factor de propagacion

console.log(...nombres);
console.log(...saludos,...nombres);

//ERROR concepto propagacion

let lista3=[nombres,saludos]; console.log(lista3)

//  Metodo .slice() 

console.log(nombres.slice(2,4));
console.log(nombres.slice(1,-1));

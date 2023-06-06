//Listas y métodos de mutacion de listas

let array = new Array(1,2,3,4,5);
console.log(array);

let array2 = [1,2,3,"Hola",false,{id:5}]; console.log(array2)

//Acceder a lso valores de un Array

console.log(array2[0]);//Indices en base 0;
console.log(array2[1]);//Indices en base 0;
console.log(array2[2]);//Indices en base 0;
console.log(array2[3]);//Indices en base 0;

//Metodos para modificar valores de arrays

//.push() & .unshift ==> Mutan valores del array

array.push("final","Final2"); console.log(array);

array.unshift("inicio","inicio2"); console.log(array);

//Metodos para eliminar valores
//.pop()   &    .shift() ==> Mutan valores

array.pop(); console.log(array);
array.pop("asdasdasdasd");console.log(array)

array.shift(); console.log(array)
array.shift(); console.log(array)

//metodo para eliminar o añadir valroes
//.splice()....splice(x,y,z)

//Eliminando valores 
array.splice(2,0); console.log(array);
array.splice(2,2); console.log(array);

//Añadir valores
array.splice(2,0,"Hola","Adios"); console.log(array);

//Modificar valores
array.splice(2,2,"Modificado1","Modificiado2"); console.log(array)
array.splice(2,0,"Modificado1","Modificiado2"); console.log(array)




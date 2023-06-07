//Set(conjuntos)
const array=[1,2,3,4,5,1,1,2,3,4,5,{id:5},{id:5},"hola","hola"];//array = conjunto ordenado de valores y objetos

const miSet = new Set(array);//set = conjunto NO ordenado de valores UNICOS

const otherSet = new Set([1,2,3,4,"asdasd"]);

console.log(array);
console.log(miSet);

//.add para añadir valores
miSet.add("Adrian")
let list=["Lisbel","Mariana"]
miSet.add(list)
console.log(miSet)

//.delete() borra
miSet.delete("Adrian");
console.log(miSet)

//.has() para saber si contiene un objeto valor

console.log(miSet.has(list))
console.log(miSet.has("Mariana"))
console.log(miSet.has("hola"))

//.size es una propiedad no un metodo
console.log(miSet.size);

//Itereacion forEach
miSet.forEach(valor => {
    console.log(valor)
})

const mi_set = miSet.values()
console.log(mi_set)

//convercion a array
let arr_set = [...miSet]
console.log(arr_set)

//.clear()
miSet.clear();
console.log(miSet);

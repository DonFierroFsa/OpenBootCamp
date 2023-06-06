//Comparar listas 
//.every()

let array = [1,54,23,"adrian",12,32,23,65,36,-3];

array2 = array.every(valor => {
    if(typeof(valor)=="number"){
        return true
    }
})
console.log(array2);
console.log(array.every(valor => typeof(valor)!=("number"&"string")));

const comparararray = (array1,array2) => {
    if(array1.lenght==array2.lenght) return false;
    const res = array1.every((valor, i) => valor == array2[i])
}
console.log(comparararray(array,array2))


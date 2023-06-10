// Crea un nuevo fichero JS que contenga las siguientes líneas

// - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
function fibo(num) {
  var array = [];
  if (num === 1) {
    array=[1]
  } else if (num === 2) {
    array = [1, 1];
  } else {
    array=[1,1]
    for (let i = 2; i != num; i++) {
        array=[...array,(array[i-1]+array[i-2])]
    }     
    
  }return array;
}

const num = 12;
console.log(fibo(num));
var array2=[1]
array2=[3]
console.log(array2)

// - Ejecuta la depuración de VSCode para visualizar la ejecución de la función

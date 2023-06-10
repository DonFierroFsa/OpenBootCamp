
//Debug-->Ejecucion del codigo controlada para ver si se esta comportando como se debe o espera
const persona = {
  nomre: "Adrian",
  edad: 32,
};
function obtenDobleEdad(edad) {
  return 2 * edad;
}
console.log(persona);
const dobleEdad = obtenDobleEdad(persona.edad);
console.log(dobleEdad);

function creaArrays(edad) {
  let array = [];
  let arraynums = [];
  for (let i = 0; i < 10; i++) {
    const numero = edad + i;
    console.log(numero);
    array.push(numero);
    arraynums = [...arraynums, numero];
  }
  return array, arraynums;
}
const array = creaArrays(persona.edad);
console.log(array);
console.log(arraynums)
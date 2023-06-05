//break and continue
//labels

let unidades = 0;
let decenas = 0;

decenas: while (true) {
  unidades: while (true) {
    console.log("El numero actual es: ", decenas, unidades);
    unidades++;

    if (unidades == 10) {
      unidades = 0;
      break unidades;
    }
  }
  decenas++;
  if (decenas == 2) {
    break decenas;
  }
}

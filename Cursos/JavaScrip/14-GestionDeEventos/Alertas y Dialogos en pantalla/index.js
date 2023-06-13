const boton = document.querySelector("#btn");

console.log(boton);

boton.addEventListener("click", () => {
  //  alert("se ha hecho click")
  //confirm("Estas de acuerdo?") && console.log("Aceptaste")
  confirm("Estas de acuerdo?")
    ? console.log("Aceptaste")
    : console.log("No aceptaste");
  /*const respuesta= confirm("seguro")
if(respuesta===True){
    console.log("Acpetaste")
} else{
    console.log("No Aceptaste")
} */
});

const botonInfo = document.querySelector("#info");
botonInfo.addEventListener("click", () => {
  const nombre = prompt("Cual es tu nombre?");
  if (nombre != null) {
    alert("Mucho gusto " + nombre);
  } else {
    alert("Cancelaste");
  }
});
const obj_list = [
    {
      nombre: "Adrian",
      edad: 32,
      apellido: "Rivira",
      deporte: "Basket",
    },
    { nombre: "Elena", edad: 65, apellido: "Zaragoza" },
  ]

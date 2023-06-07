//Trabajando con Fechas

let fecha = new Date()
console.log(fecha);

const fecha2= new Date(1995,11,18,12,88,87)
console.log(fecha2)

var fecha3= new Date("October,12,1990, 12:15:30")
console.log(fecha3)

//Comparando Fecha
console.log(fecha>fecha2);

console.log(fecha==fecha2)
//ERRROR con == siempre da false
console.log(fecha.getTime())

//Obtener dia mes y año de una fecha

console.log(fecha.getDate());
console.log(fecha.getMonth()+1)
console.log(fecha.getFullYear())
console.log(fecha2.getDay())
console.log(fecha.getTime())

//
console.log(fecha2.toLocaleDateString("en-Er"))
console.log(fecha2.toLocaleDateString("en-AR"))

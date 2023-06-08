// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy
let date = new Date()
console.log(date)

// - La fecha de tu nacimiento
let born_date  = new Date(1990,11,18);
console.log(born_date)

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
let Comparando = date>born_date;
console.log(Comparando)

// - Una variable que contenga el día de tu nacimiento
let born_day = born_date.getDay();
console.log(born_day)
let born_day2 = born_date.getDate();
console.log(born_day2);

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let born_month = born_date.getMonth()+1;
console.log(born_month)

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
let born_year = born_date.getFullYear();
console.log(born_year)
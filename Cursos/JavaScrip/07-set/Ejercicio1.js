//Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

//- Un nuevo Set con los nombres de tu familia
const my_family = new Set(["Lisbel","Elena","Graciela","Mariana","Adrian"])

//- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
my_family.add("Adrian");
console.log(my_family);

//- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
my_family.add("Javascrip")
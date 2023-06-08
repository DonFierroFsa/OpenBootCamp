//Funciones: como se declaran y como se usan
//Las funciones son bloques de codigo que se ejecutan con un fin especifico

function saludar(parametro1,p2){
    console.log(`Hola ${parametro1}`);
};
let nombre = "Lisbel";
saludar("Adrian");
saludar (nombre);

function saludar2(name="Anonimo"){
    console.log("Hola ",name);
}

saludar2();saludar2("Graciela")

function suma(num1=0,num2=0){
    suma = num1+num2;
    //return (suma+" El resultado de la suma");
    return ["El resultado de la suma es "+ suma];
}

console.log(suma(1,2))

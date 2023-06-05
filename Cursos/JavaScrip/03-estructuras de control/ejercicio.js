//Ejercicio
//factorial con bucle for
var numero=4;
var factorial1=1;

for (let i=1; i<=numero; i++){

    factorial1=factorial1*i
    console.log(factorial1);
}
console.log(factorial1,"calculado con for")

//facorial While

var factorial2=1;
var j=1;
while (j<=numero){
    factorial2=factorial2*j
    j++;
}
console.log(factorial2,"calulado con while")

//factorial While break and IF

let factorial3 = 1

while (true) {
    factorial3 *= numero
    numero--
    if (numero === 1) break
}
console.log(factorial3,"calculado con break")


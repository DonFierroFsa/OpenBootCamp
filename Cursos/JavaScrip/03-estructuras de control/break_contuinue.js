//Casos especificos.
//Dentro del bucle es buena practica usar variable LET

let lista = [1,2,3,4,5,6,7,8,9]

for (let I=0; I < lista.length ;I++) {

    if(lista[I]==3){
        continue;
    }

    console.log(lista[I]);

    if(lista[I]>5){
        break;
    }
}
console.log(I)
if(true){
console.log("no se muestra el valor de I -->", I)
}
console.log(I)
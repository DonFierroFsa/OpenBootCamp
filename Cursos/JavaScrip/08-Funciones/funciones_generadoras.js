//Funciones Generadores
//Tienen sintaxis especial

//generando un id incremental

function* generarId(){  //Function* lleva asterisco al final
    let id=0; 
    while(true){
        id++
        if(id==10){
            return id
        }
        yield id//En lugar de salir de la funcion se que queda aqui esperando hasta que se vuelva a llamar
    }
}

const genId = generarId();

console.log(genId.next().value)
console.log(genId.next().value)
console.log(genId.next().value)
console.log(genId.next().value)
console.log(genId.next().value)
console.log(genId.next().value)
console.log(genId.next().value)
console.log(genId.next().value)
console.log(genId.next().value)
console.log(genId.next().value)

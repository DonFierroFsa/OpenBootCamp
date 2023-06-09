// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"
function allwaytrue(){ return 2<32}
console.log(allwaytrue())

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const miPromesa = new Promise((resolve,reject) =>{
    if(true){
        resolve()
    }else{
        reject()
    }
})
miPromesa
    .then(() => setTimeout(() => console.log("Hola soy una promersa"),5000) );
//Jugando con setTimeout(()=>{code},deley)
//Jugando con setTimeout(()=>{functionRef},delay,parm1,param2)
setTimeout(() => {console.log("first message")},3000)
setTimeout(() => {console.log("second message")},1000)

//- Una función generadora de índices pares automáticos

function* idPairGenerator (){
    let id=2;
    while(true){
        id +=2;
        if(id==20){
            return id
        }
        yield id
    }
}

const pairGEn = idPairGenerator();

console.log(pairGEn.next().value); 
console.log(pairGEn.next().value); 
console.log(pairGEn.next().value); 
console.log(pairGEn.next().value); 
console.log(pairGEn.next().value); 
console.log(pairGEn.next().value);
console.log(pairGEn.next().value);
console.log(pairGEn.next().value);
console.log(pairGEn.next().value);



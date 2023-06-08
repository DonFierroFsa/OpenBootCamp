//Funciones Asincronas: cuando hacemos una llamada a base de datos externas puede demorar X tiempo

function miAsinc(){
    //Hace una llamada a una base de datos ext.
    //Puede demorar tiempo o dar errror.
    //Esto se define a traves de las Promesas
}
//La promesa admite un callBack que es una funcion ejectura, esta debe tener dos parametros, el RESOLVE, y el REJECT
const miPromesa = new Promise((resolve,reject) =>{
    const i = Math.floor(Math.random *2)
    if(i==0){
        resolve()
    }else{
        reject()
    }
})

miPromesa
    .then(() => console.log("Se ha ejecturado en forma correcta"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Siemre me ejecuto"))

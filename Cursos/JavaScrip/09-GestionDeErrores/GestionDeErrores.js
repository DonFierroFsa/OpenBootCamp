// const miFuncion = valor =>{
//     if( typeof valor ==="number"){
//         return valor*2
//     }else {
//         return false
//     }
//     };
// console.log (miFuncion(10));

const funcion = val => {
    if (typeof(val) ==="number"){
        return val**2;
    } throw new Error("El valor debe ser de tipo numerico")
}

const numero = 2

try{
    //codigo que puede fallar
    const cuadrado = funcion(numero)
    console.log(cuadrado);
    console.log ("Todo ok")
}catch(e){
    //En que caso de que falle, quiero que ejecutes==>
    console.error("ERROR!!!")
    console.error(e)
}finally{
    console.log("Esto se ejecuta siempre")
}

//Itereaciones Avanzadas

let nombres = ["Adrian","Graciela","Mariana","Elena","Lisbel"];
//.map()}

let nums_nombres = nombres.map((valor,indice)=>{
    return (indice+1)+"_-_"+valor; 
    console.log(indice+1,valor)
});
console.log(nums_nombres);

//.filter()

let obj_list=[
    {nombre:"Adrian", edad:32},
    {nombre:"Lisbel",edad:64},
    {nombre:"Elena",edad:64},
    {nombre:"Mariana",edad:36},
]

let mayors= obj_list.filter(valor=>{
    if(valor.edad>40){
        return  true;
    }else{
        return false;
    }
}); console.log(mayors)

let young = obj_list.filter(valor=>valor.edad<40);
console.log(young)

//Obtener algo a partir de una lista .reduce()
let list = [1,2,3,4,5,6,7,8,9]
let sum_edades = list.reduce((anterior,current,indice,arrayOriginal)=>{ 
    console.log(anterior);
    console.log(current);
    console.log(indice);
    console.log(arrayOriginal);
    return anterior+current;
} )

console.log(sum_edades);
//ITERACIONES

let nums = [0,1,2,3,4,5,6];

for(let i=0; i<nums.length; i++){
    console.log(nums[i])
}
//muestra los numero pares cambiando el paso
for(let i=2; i<nums.length; i=i+2){
    
    console.log(nums[i])
}

//Forma moderna de Iterar .forEach
nums.forEach(valor=>{
    console.log(valor)
});

let sum=0;
nums.forEach(valor=>{
    sum= valor+ sum;
    console.log(sum)
});console.log(sum)

//Busqueda en un array ==> .find()

let variable = nums.find(valor=>{
    if (valor===9){
        return true;}
}); console.log(variable)

let obj_list=[
    {nombre:"Adrian", edad:32},
    {nombre:"Lisbel",edad:64},
    {nombre:"Elena",edad:64},
    {nombre:"Mariana",edad:36},
]
let edad_mariana = obj_list.find(valor=>{
    if(valor.nombre=="Mariana"){
        return true
    }
}); console.log(edad_mariana.edad);console.log(edad_mariana);

let edad_elena = obj_list.find(valor=> valor.nombre === "Elena"); console.log(edad_elena)

let {edad} = obj_list.find( valor => valor.nombre == "Adrian");
console.log(edad)
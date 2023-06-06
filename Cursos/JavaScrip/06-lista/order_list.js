let array=[1,5,6,23,3,5,5,12,3,534,12,34,21];

array.sort((a,b)=>{
    if(a<b){
        return-1;
    }else if(a>b){
        return+15;
    }else (a==b) 
        return 0;
    
})

console.log(array)

//Ordenar Unicamente arrays numericos

let array2=[1,5,6,23,3,5,5,12,3,534,12,34,21];

array2.sort((a,b)=>a-b);
console.log(array2);
/////
let obj_list=[
    {nombre:"Adrian", edad:32},
    {nombre:"Lisbel",edad:64},
    {nombre:"Elena",edad:64},
    {nombre:"Mariana",edad:36},
]
obj_list.sort((a,b)=>a.edad-b.edad)

console.log(obj_list);

let a = 5;
let b = "5";

//compararcion debil == solo compara valor

if(a==b){
    console.log("a es igualmente-debil a b")
}else{ 
    console.log("a no es igual b")
}

//Comparacion Fuerte === compara valor y tipo
if (a===b){
    console.log("a no es igualmente-fuerte a b")
}
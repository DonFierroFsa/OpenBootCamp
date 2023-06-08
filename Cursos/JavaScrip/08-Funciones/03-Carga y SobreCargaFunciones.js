//Sobre Carga y Carga de Funciones

function saludar (){
    hola()
}
function hola(name="Anonymus"){
    console.log("Hi ,", name)
}

saludar()//global

/*
1_Global();
2_saludar().global()
3:hola().saludar().global()
4_saludar().global()
5_global()
Para optimizar recursos*/

//Sobrecargar de funciones--StackOverFlow

function recursiva(){
    recursiva()
}
//ERROR DE RECURSIVIDAD
//recursiva();
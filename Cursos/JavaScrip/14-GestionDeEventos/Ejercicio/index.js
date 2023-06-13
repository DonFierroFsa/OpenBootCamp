const boton= document.querySelector("#btn")
boton.addEventListener("click",()=>{
    alert("click en el boton")
})
$(document).ready(()=>{
   $("button").click(()=>{
    console.log("Hola estoy usando JQuery")
   })
})

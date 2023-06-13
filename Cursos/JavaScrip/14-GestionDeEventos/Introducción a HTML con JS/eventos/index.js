const htexto = document.getElementById("h-texto")

console.log(htexto)

htexto.addEventListener("cambioTexto", evento => {
    console.log(evento.detail)
    htexto.innerText = evento.detail.texto
    htexto.style.color = evento.detail.color
})

function cambiartexto(nuevoTexto, color) {
    const evento = new CustomEvent("cambioTexto",{
        detail:{
            texto: nuevoTexto,
            color : color
        }
    })
    htexto.dispatchEvent(evento)    
}
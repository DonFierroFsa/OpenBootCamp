const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo =>{
    parrafo.addEventListener("dragstart",(event) => {
        console.log("Estoy arrastrando el parrafo ", parrafo.innerHTML)
        parrafo.classList.add("draggin")
        event.dataTransfer.setData("id",parrafo.id)
        const img = document.querySelector(".imagen")
        event.dataTransfer.setDragImage(img,0,0)
        })
    parrafo.addEventListener("dragend",()=> {
        console.log("Termine de arrastrar el parrafo")
        parrafo.classList.remove("draggin")
    })
})

secciones.forEach((seccion)=> {
    seccion.addEventListener("dragover",(event)=>{
        event.preventDefault()
        event.dataTransfer.dropEffect="move";
    })
    seccion.addEventListener("drop",(event)=>{
        const idParrafo=event.dataTransfer.getData("id")
        const parrafo = document.getElementById(idParrafo)
        seccion.appendChild(parrafo)
    })
})
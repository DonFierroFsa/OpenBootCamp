//$(selector).accion()

/*Esta exprecion sirve para evitar errores de Undefined
$(document).ready(()=>{

})
*/

$(()=>{
    /* Selectores :
    id="el-1" -> "#el-1"
    class="el-1"->".el-1"
     */
    $(".btn-hide").click(()=>{
        console.log("ocultado...")
        $("h1").hide()
    })
    $(".btn-show").click(()=>{
        //$("h1").show()
        $("h1").fadeIn()
    })
    $(".item1").click(()=>{
        $("h1").css({color:"red"})
    })
    $(".item2").dblclick(()=>{
        $("h1").css({color:"blue"})
    })
    $(".new-element").click(()=>{
        $("ul").append("<li>New Element</li>")
    })
    $(".i-element").click(()=>{
        $("ul").prepend("<li>New Element</li>")
    })
    $("li").mouseenter((element)=>{
        element.target.style.color="red"
    })
    $("li").mouseleave((element)=>{
        element.target.style.color="black"
    })
})
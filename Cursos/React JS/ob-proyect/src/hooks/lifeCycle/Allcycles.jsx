import React,{useEffect} from 'react';

const Allcycles = () => {
    useEffect(() => {
        console.log("Componenete actualizado")

        const intervalID= setInterval(()=>{
            document.title=`${new Date()}`;
            console.log("actualizacion del componente")
        },1000)
        return () => {
        console.log("Comportamiento antes que el componente desaparesca ")
        document.title="Tiempo detenido";
        clearInterval(intervalID )
        };
    }, []);
    return (
        <div>
            
        </div>
    );
}

export default Allcycles;

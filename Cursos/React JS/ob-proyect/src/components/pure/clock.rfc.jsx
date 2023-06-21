import React,{useState,useEffect} from 'react';

const ClockRfc = () => {

    const initialState={
        fecha: new Date(),
        edad: 0,
        nombre: "Adrian",
        apellido:"Rivirra",
        }

        const [state, setState] = useState(initialState);

        const actualizarUsuario = ()=>{
            return setState({
                fecha: state.fecha,
                edad: state.edad+1,
                nombre: state.nombre,
                apellido: state.apellido,

            })
        }

        useEffect(() => {
            const intervalAge = setInterval(()=>{
                actualizarUsuario();
            },1000) 
            return () => {
                clearInterval(intervalAge)
            };
        }, );
    return (
        <div>
            <h2>
         Hora Actual:
         {state.fecha.toLocaleTimeString()}
         </h2>
         <h3>{state.nombre} {state.apellido}</h3>
         <h1>Edad: {state.edad}</h1>
        </div>
    );
}

export default ClockRfc;

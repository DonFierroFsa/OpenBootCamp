/**Ejemplo de uso de useState(), 
 * useRef( para referenciar elementos dentro de la vista),
 * useEffect(para controlar cambios en la vista y siclo de vida del componente) */

import React,{useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {

    //Vamos a crear dos contadores en estados diferentes

    const [contador1, setContador1] = useState(0);

    const [contador2, setContador2] = useState(0);

    //Vamos a crear una referencia con useRef() para asociar una variable con un elemento del Dom del componenete

    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1 +1)
    }

    function incrementar2(){
        setContador2(contador2 +1)
    }

    //useEffect Caso1: ejecutar siempre un snippet de codigo--> cada ves que haya un cambio en el estado del componenete se ejecuta lo que este en el useEffect
    // useEffect(() => {
    //     console.log("cambio en el estado del componente");
    //     console.log("mostrando referencia al elemento del DOM");
    //     console.log(miRef);
    //     });

    //useEffect Caso2: cada ves que cambie el contador1 se ejecuta lo que diga el useEffect, en contador2 me la suda

    useEffect(() => {
        console.log("cambio en el estado del componente");
        console.log("mostrando referencia al elemento del DOM");
        console.log(miRef);
    },[contador1]);

    return (
        <div>
            <h1>Ejemplo de useState, useRef, useEffect</h1>
            <h2>Contador 1: {contador1}</h2>
            <h2>Contador 2: {contador2}</h2>
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            <div>
                <button onClick={incrementar1}>Incrementar1</button>
                <button onClick={incrementar2}>Incrementar2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;

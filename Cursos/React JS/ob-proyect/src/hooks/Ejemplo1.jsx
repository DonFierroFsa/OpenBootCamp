/** Uso del hook useState
 * Crear un componente del tipo funcion y acceder a su estado privado a traves de un hooks y ademas poder modificarlo
 */
import React,{useState} from 'react';

const Ejemplo1 = () => {

    //valor inicial para un contador
    const valorInicial=0;
    
    //Valor inicial para una persona
    const  personaInicial={
        nombre: "Adrian",
        email:"adasd@email.com"
    }

    //Queremos que el valorInicial y personaInicial ean parte del estado del componente para asi poder gestionar su cambio y que este se vea reflejado en la vista del componente.
    //const [nombreVariable, funcionParaCambiar]=useState(valorInicial)
    const [contador, setContador] = useState(valorInicial);

    const [persona, setPersona] = useState(personaInicial);

    /**Funcion para actualizar el estado privado que contiene el contador */
    function incrementarContador() {
        setContador(contador +1);
    }
    function actualizarPersona(){
        setPersona(
            {
                nombre:"Pepe",
                email:"pepe@email.com",
            }
        )
    }

    return (
        <div>
            <h1>Ejemplo1 de useState</h1>
            <h2>Contador:{contador}</h2>
            <h2>Datos de la persona:</h2>
            <h3>{persona.nombre}</h3>
            <h3>{persona.email}</h3>
            <div>
                <button onClick={incrementarContador}>Contador</button>
            </div>
            <div>
                <button  onClick={actualizarPersona}>Persona</button>
            </div>
        </div>
    );
}

export default Ejemplo1;

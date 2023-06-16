import React,{useState} from 'react';
import PropTypes from 'prop-types';


const ComponentB = (estado) => {
    const [conectado, setconectado] = useState(estado);
    return (
        <div>
            <h3>{conectado!==false?"Contacto en linea":"Contacto No Disponible" }</h3>
            <button onClick={()=> setconectado(!conectado)}>{conectado!==false?"Desconectar":"Conectar"}</button>
        </div>
    );
};


ComponentB.propTypes = {
    conectado:PropTypes.bool,
};


export default ComponentB;

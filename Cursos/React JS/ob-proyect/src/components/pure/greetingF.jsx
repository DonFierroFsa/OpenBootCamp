import React,{useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

// Al ser una funcion no tengo constructor, entonces utilizo useState, es una funcion que nos permite crear un State privado

    const [age, setage] = useState(32);

    const birthday = ()=>{
        setage(age+1);
    }

    return (
        <div>
                <h1>
                    HOLA {props.name} desde componente funciona!!
                </h1>
                <h2>
                    Tu edad es :
                    {age}
                </h2>
                <div>
                    <button onClick={birthday} type="button" class="btn btn-primary">
                        Cumplir Años
                    </button>
                </div>
            </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string  
};


export default GreetingF;

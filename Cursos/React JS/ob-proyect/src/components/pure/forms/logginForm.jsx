/**Componente que va a contener un formulario para autenticacion de usuarios */

import React,{useState} from 'react';

const LogginForm = () => {

    const initialCredentials = [{

        user:"",
        password:"",
    }]

    const [credentials, setCredentials] = useState(initialCredentials);

    return (
        <div>
            
        </div>
    );
}

export default LogginForm;

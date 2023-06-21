import React,{useState} from 'react';


//Definiendo estilos en constantes

    const loggedStyle={
        color:"white",

    }

    const unloggedStyle={
        color:"red",
        fontWeight:"bolder",
    }



const GreetingStyle = (props) => {

    const [logged, setLogged] = useState(false);

    const greetingUser= (<p> Hola, {props.name}</p>);
    const pleasLoggin=(<p>Please loggin</p>);
    return (
        <div style={logged?loggedStyle : unloggedStyle}>
            {logged?greetingUser:pleasLoggin}
            
            <button onClick={()=>{ 
            console.log("Boton Pulsado")
            setLogged(!logged)}}>
                {logged?"Logout":"Login"}
            </button>
        </div>
    );
}

export default GreetingStyle;

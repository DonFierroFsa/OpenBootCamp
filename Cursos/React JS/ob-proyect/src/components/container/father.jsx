import React,{useState} from 'react';
import Child from '../pure/child';

const Father = () => {

    const [name, setName] = useState("Adrian");

    function showMessege(text){
        return alert(`Messege recived : "${text}"`)
    }
    function updateName(newName){
        setName(newName)
    }

    return (
        <div style={{background:"red",padding:"4rem" }}>
            <Child name={name} send={showMessege} update={updateName}></Child>
        </div>
    );
}

export default Father;

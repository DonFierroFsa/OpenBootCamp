import React,{useState} from 'react';

const unlogStyle = {
    color: "white",
    backgroundColor:"red",
    fontweith:"bold",
}

const logStyle ={
    color:"darkBlue",
    backgroundColor:"lightgreen",
}
//Login logout Buttons

const LoginButton = ({LoginAction, propStyle})=>{
    return (
        <button onClick={LoginAction} style={propStyle}>LogIn</button>
    )
}

const LogoutButton = ({LogoutAction,propStyle})=>{
    return(
        <button onClick={LogoutAction} style={propStyle}>LogOut</button>
    )
}

const OptionalRender = () => {

    const [access, setAccess] = useState(false);
    const [nmessage, setNMessage] = useState(0);

    // const updateAcccess = ()=>{

    //     setAccess(!access);
    // }

    const LoginAction = ()=>{
        setAccess(true)
    }

    const LogoutAction = ()=>{
        setAccess(false)
    }

    // let optionalButton;
    // if (access) {
    //     optionalButton = <button onClick={updateAcccess}>LogOut</button>
    // }else{
    //     optionalButton = <button onClick={updateAcccess}>LogIn</button>
    // }
    let logButton;
    if (access) {
        logButton = <LogoutButton LogoutAction={LogoutAction} propStyle={unlogStyle}></LogoutButton>
    }else{
        logButton = <LoginButton LoginAction={LoginAction} propStyle={logStyle}></LoginButton>
    }

    let addMessages = ()=>{
    setNMessage(nmessage+1)
    }

    return (
        <div>
            {logButton}
            {/**N° Messages unread*/}
            {access? 
            (<div>
            {nmessage===1 &&<p>You have {nmessage} new message...</p>}
            {nmessage>1 && <p>You have {nmessage} new messages...</p>}
            {nmessage===0 && <p>You don't have new messages</p>}
            {nmessage >0 ? 
                <p>You have {nmessage} new message{nmessage>1?"s":null }...</p>:
                <p>You don't have new messages</p>
                }
            <button onClick={addMessages}>addMessages</button> 
            </div>)
            :null}
            
        </div>
    );
}

export default OptionalRender;

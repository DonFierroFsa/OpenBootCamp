import React,{useState} from 'react';

function Excercise12() {

    const [color, setColor] = useState("#000000");
    const [manageInterval, setManageInterval] = useState(0);

    const getColor=()=>{
        return(
        Math.floor(Math.random()*256))}
    

    const getHex =(red,green,blue) =>{
        return(
            "#"+[red,green,blue].map((c)=>{
                const hex = c.toString(16);
                return hex.lenght===1 ? "0"+hex:hex;
            }).join("")
        )
    }
    const generateColor = ()=>{
        const rgb ={
            r:getColor(),
            g:getColor(),
            b:getColor(),
        }
        return setColor(getHex(rgb.b,rgb.g,rgb.r));
    }

    const changeColor = ()=>{
        return (setManageInterval(setInterval(generateColor,1000)))
    }

    const changeStop=()=>{
        return(clearInterval(manageInterval))
    }
    return (
        <div onMouseOver={changeColor} onMouseLeave={changeStop} onDoubleClick={changeStop} style={{width:"255px",height:"255px",backgroundColor:color }}>
        <p style={{color:"white"}}>Color:{color}</p>
        </div>
    );
}

export default Excercise12;


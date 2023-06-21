import React, { Component,useEffect } from 'react'

export default class WillUnmount extends Component {
    
    componentWillUnmount(){
        console.log("Comportamiento antes que el componente desaparesca ")
    }

  render() {
    return (
      <div>
        <h1>componentWillUnmount</h1>
      </div>
    )
  }
}


export const WillUnmountHook = () => {

    useEffect(() => {
        
        return () => {
            console.log("Comportamiento antes que el componente desaparesca ")
        };
    }, []);/**Corchete vacio apra que se ejecute una ves */

    return (
        <div>
            <h1>WillUnmountHook</h1>
        </div>
    );
}



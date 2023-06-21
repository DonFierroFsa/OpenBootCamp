import React, { Component,useEffect } from 'react'

export  class DidUpdate extends Component {

    componentDidUpdate(){
        console.log("Comportamiento cuando el componenete recibe nuevos porps o cambio en su estado privado")
    }

  render() {
    return (
      <div>
        <h1>DidUpdate</h1>
      </div>
    )
  }
}


export const DidUpdateHook = () => {

    useEffect(() => {
        console.log("Comportamiento cuando el componenete recibe nuevos porps o cambio en su estado privado")
    },);/**Sin corchetes para que se ejecute ilimitadas veces, es decir, cada ves que exista un cambio en los estados */

    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}


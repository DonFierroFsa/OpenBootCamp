/**Ejemplo de uso del metodo cyclo de vida en componente clase y el hook de cliclo de vida en componente funcional */

import React, { Component,useEffect } from 'react'

export default class DidMount extends Component {

    componentDidMount(){
        console.log("Comportamiento antes de que el componenete sea añadido al DOM(renderice)")
    }

  render() {
    return (
      <div>
        <h1>DidMount</h1>
      </div>
    )
  }
}

/**Utilizo useEffect */
export const DidMountHook = () => {

    useEffect(() => {
        console.log("añadido")
    }, []);/**Al tener el corchete vacio se ejecuta solo una ves, es decir, antes que se renderice */

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}



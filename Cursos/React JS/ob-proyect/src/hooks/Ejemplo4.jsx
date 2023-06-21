//Usos de {props.children} sirve para mostrar el h3 en app.js o cualquier otro children

import React from 'react'

export default function Ejemplo4(props) {
  return (
    <div>
      <h1>Ejemplo de "props.children"</h1>
      <span>La idea es que este componente pueda pintar los elementos o props que se le pasen desde el padre </span>
      <h2>
        Nombre: {props.name}
      </h2>
      {props.children} 
    </div>
  )
}

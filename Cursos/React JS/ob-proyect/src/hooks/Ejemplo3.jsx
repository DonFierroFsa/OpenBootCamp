//Ejemplo de useState(),
//useContext(para trabajar con datos)

import React, { useState, useContext } from "react";

const miContexto = React.createContext(null);

const Componente1 = () => {

    const state = useContext(miContexto);

  return (
    <div>
      <h1> El token es : {state.token} </h1>
      <Componente2></Componente2>
    </div>
  );
};

const Componente2 = () => {
  const state = useContext(miContexto);

  return (
    <div>
      <h2>La sesion es: {state.sesion}</h2>
    </div>
  );
};


export default function MiComponenteConContexto() {
  const estadoIncial = {
    token: "9999999",
    sesion: 1,
  };

  const [sesionData, setSesionData] = useState(estadoIncial);

  function actualizarSesion() {
    setSesionData({
      token: Math.floor(estadoIncial.token*Math.random()),
      sesion: sesionData.sesion + 1,
    });
  }

  return (
    <div>
    <h1>Ejemplo de useState() useContext()</h1>
      <miContexto.Provider value={sesionData}>
        {/* Todo lo que esta aqui adentro puede leer los datos de sesionData y tambien se actualizan */}
        <Componente1></Componente1>
        <button onClick={actualizarSesion}>actualizarSesion</button>
      </miContexto.Provider>
    </div>
  );
}

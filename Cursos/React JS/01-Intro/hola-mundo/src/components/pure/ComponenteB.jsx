import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "../../models/contacto.class";

const ComponenteB = ({ contacto }) => {
  return (
    <div>
      <h2>Nombre: {contacto.Nombre} </h2>
      <h2>Apellido: {contacto.Apellido} </h2>
      <h2>Email: {contacto.Email}</h2>
      <h3>
        Conectado:{" "}
        {contacto.contectado ? "Contacto En Linea" : "Contacto Desconectado"}
      </h3>
    </div>
  );
};

ComponenteB.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
};

export default ComponenteB;

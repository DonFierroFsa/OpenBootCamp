import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/concacto.class';
import ComponentB from '../componentB';


const ComponentA = ({contacto}) => {
    return (
        <div>
            <h1>Contacto:</h1>
            <h2>Nombre: {contacto.nombre}</h2>
            <h2>Apellido:   {contacto.apellido}</h2>
            <h3>Email:  {contacto.email} </h3>
            <ComponentB estado = {true}> </ComponentB>
        </div>
    );
};


ComponentA.propTypes = {
    contacto:PropTypes.instanceOf(Contacto),
};


export default ComponentA;

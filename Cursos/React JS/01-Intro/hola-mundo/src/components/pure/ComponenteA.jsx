import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';
import ComponenteB from './ComponenteB';


const ComponenteA = () => {

    const contactoA = new Contacto("Adriann","Rivira","riviraadrian@gmail.com",false);
    return (
        <div>
            <div>
            <h1>Contacto</h1>
            </div>
            <ComponenteB contacto={contactoA}></ComponenteB>
        </div>
    );
};


ComponenteA.propTypes = {

};


export default ComponenteA;

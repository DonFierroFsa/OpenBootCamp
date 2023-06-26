import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Contacts = ({contact,removeContact,conect}) => {

  function conected(){
    if(contact.conected){
      return(<i className="bi bi-toggle2-off " style={{color:"green",margin:"0.5rem",fontSize:"1.1rem"}}>Online</i>
      )
    }else{
      return(<i className="bi bi-toggle2-on " style={{color:"darkred",margin:"0.5rem",fontSize:"1.1rem"}}>Offline</i>)
    }
  }

  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td onClick={()=>conect(contact)}>{conected()}</td>
      <td><i onClick={()=>removeContact(contact)} className="bi-trash" style={{color:"red",fontSize:"1.5rem"}}></i></td>
    </tr>
  );
};

Contacts.propTypes = {};

export default Contacts;

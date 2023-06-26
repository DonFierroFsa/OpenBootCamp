import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Contacts from "../pure/contacts";
import ContactForm from "../pure/forms/contact.form";

//Container de Contactos
const ContactList = () => {
  //Contacto de ejemplo:
  const defaultContact = {
    name: "Adrian",
    email: "adrian@email.com",
    conected: true,
  };

  //Estado del componente
  const [contacts, setNewContact] = useState([defaultContact]);

  //Funcion Remove Contact

  function removeContact(contact){
    const index= contacts.indexOf(contact)
    const tempContacts = [...contacts]
    tempContacts.splice(index,1)
    setNewContact(tempContacts)

  }

  function conect(contact){
    const index = contacts.indexOf(contact)
    const tempContacts = [...contacts];
    tempContacts[index].conected = !tempContacts[index].conected
    setNewContact(tempContacts)
  }
  function add(newContact){
    const index = contacts.indexOf(newContact)
    const tempContacts= [...contacts]
    tempContacts.push(newContact)
    setNewContact(tempContacts)
  }

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <label>Contacts</label>
        </div>
        <div
          className="car-body"
          style={{ position: "relative", height: "relative" }}
        >
          <table className="table primary table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Conected</th>
              </tr>
            </thead>
            <tbody>
              {/**Itero sobre la lista para que map() me devuelva los contactos e indices */}
              {contacts.map((contact, index) => {
                return <Contacts contact={contact} conect={conect} key={index} removeContact={removeContact}></Contacts>;
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <ContactForm add={add}></ContactForm>
      </div>
    </div>
  );
};

ContactList.propTypes = {};

export default ContactList;

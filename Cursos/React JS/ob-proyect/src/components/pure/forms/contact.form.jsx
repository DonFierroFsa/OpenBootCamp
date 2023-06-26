import React, { useRef } from "react";

const ContactForm = ({add}) => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  
    function addContact(e){
        e.preventDefault();
        const newContact= {
            name:nameRef.current.values,
            email:emailRef.current.value
        }
        add(newContact)
    }

  return (
    <form onSubmit={addContact}>
      <div>
        <input ref={nameRef}></input>
        <input ref={emailRef}></input>
      </div>
      <div>
        <button type="submit">CreateContact</button>
      </div>
    </form>
  );
};

export default ContactForm;

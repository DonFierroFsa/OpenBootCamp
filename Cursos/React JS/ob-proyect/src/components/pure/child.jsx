import React, { useRef } from "react";

const Child = ({ name, send,update }) => {
  const MessegeReff = useRef("");
  const nameReff = useRef("")

  function pressButton() {
    const text = MessegeReff.current.value;
    alert(`Intput Text--> ${text}`);
  }

  function pressButtonParams(text) {
    alert(`text:${text}`);
  }

  function submitName(e){
     e.preventDefault();
     update(nameReff.current.value)
  }

  return (
    <div
      style={{
        background: "aqua",
        padding: "2rem",
        color: "steelblue",
        fontWeight: "bolder",
        fontSize: "1.4rem",
      }}
    >
      <p onMouseOver={() => console.log("mouse over")}>Hello, {name}</p>
      <button onClick={() => console.log("Boton 1 pulsado")}>button 1</button>
      <button onClick={pressButton}>button 2</button>
      <button
        onClick={() => {
          pressButtonParams("Hello");
        }}
      >
        button 3
      </button>
      <input
        placeholder="Send a text to your father"
        onFocus={() => console.log("input focused")}
        onChange={(e) => console.log("input changed", e.target.value)}
        onCopy={() => console.log("Copied text from Input")}
        ref={MessegeReff}
      ></input>
      <button onClick={() => send(MessegeReff.current.value)}>
        Send Messege
      </button>
      <div style={{ marginTop: "2rem" }}>
        <form onSubmit={submitName}>
            <input ref={nameReff} placeholder="New Name"></input>
            <button type="submit">Update Name</button>
        </form>
      </div>
    </div>
  );
};

export default Child;

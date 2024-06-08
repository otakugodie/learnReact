import React, { useState } from "react";
import "./App.css";

const App = () => {
  const reyesGodos=[
    {
      nombre: "Ataúlfo",
      aficion: "comer toros sin pelar",
    },{
      nombre: "Recesvinto",
      aficion: "leer a Hegel en arameo",
    },{
      nombre: "Teodorico",
      aficion: "la cría del escarabajo en almíbar"
    }
  ]

  const [contador, setContador]=useState(0);
  const [mensaje, setMensaje]=useState();

  const cambio = () =>{    
    setContador(contador+1);
    if (contador+1>=reyesGodos.length ) {
      setContador(0);      
    }

    setMensaje(<h2>La afición principal de <span className="rojo">{reyesGodos[contador].nombre}</span> es <span className="verde">{reyesGodos[contador].aficion}</span>.</h2>);
    
  }

  
  return (
    <>
    {/* Esto es un comentario dentro del return*/}
    {/* Crear un <div> y un <button> */}
    <div>    
      <button onClick={cambio}>Ver siguiente</button>
      {mensaje}
    </div>
    {/*}
    <div>
      <p>La afición principal de {nombreRey} es {aficionRey} </p>
    </div>
    {*/}
    </>
  )
}
export default App;
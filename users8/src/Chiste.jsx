import React from 'react'
import { useState, useEffect  } from "react";


export default function Chiste() {
    const [chiste, setChiste]=useState('');
    const otro = () => {
        const url='https://api.chucknorris.io/jokes/random';
        const peticion= fetch(url);
        //console.log(peticion);
        peticion
        .then( datos => datos.json() )
        .then( lectura => {
            setChiste (lectura.value);
        } )
        .catch( console.log('Se ha producido un error') );    
    }
    useEffect ( () => {
        otro();
    }, [] )
    
    
    

  return (
    <>
        <h1>Chuck Norris's Jokes</h1>
        {chiste}
        <div><button onClick={otro}>New joke</button></div>
    </>
  )
}

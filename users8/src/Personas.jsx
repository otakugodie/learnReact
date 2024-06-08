import React from 'react'
import { useEffect, useState } from "react";
import './Personas.css';

export default function Personas() {

    const [datos, setDatos] = useState([]);

    useEffect ( () => {
        const url='https://randomuser.me/api/?results=10';
        const consulta = fetch(url);
        consulta
        .then( datos => datos.json()  )
        .then ( data => {
            setDatos (data.results);        
        } )
        .catch(  () => console.log('Se presento un error')  );

    }, [] )
    
  
  return (
    <>               
        {datos.map( (item) => (
            <div key={item.email} className='ch'>
            <p>
                {item.name.first} {item.name.last}
            </p>
            </div>
        )
        )}
        
    </>
  )
}

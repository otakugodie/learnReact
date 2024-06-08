import React from 'react'
import Actividad1 from "./Actividad1.jsx";
//import Actividad2 from "./Actividad2.jsx";
//import Actividad3 from "./Actividad3.jsx";
//import Actividad4 from "./Actividad4.jsx";
import './App.css';

function App() {
  
  const reyes=[
    {
      nombre:"Atanagildo",
      reinado:15,
      vacasComidas:9
    },    
    {
      nombre:"Ervigio",
      reinado:7,
      vacasComidas:3
    },{
      nombre:"Ataúlfo",
      reinado:5,
      vacasComidas:16
    },{
      nombre:"Leogivildo",
      reinado:18,
      vacasComidas:3
    },{
      nombre:"Recesvinto",
      reinado:19,
      vacasComidas:11
    },{
      nombre:"Sisebuto",
      reinado:33,
      vacasComidas:9
    },{
      nombre:"Teodorico",
      reinado:33,
      vacasComidas:12
    }
  ]
   
  
  return (
    <>
      
      <h1>Actividad 1:</h1>
      <div className='caja'>
        <Actividad1 reyes={reyes} />
      </div>
      
      {/*}
      <h1>Actividad 2:</h1>
      <Actividad2 reyes={reyes} />
      
      <h1>Actividad 3:</h1>
      <Actividad3 reyes={reyes} />
      
      <h1>Actividad 4:</h1>
      <Actividad4 reyes={reyes} />
      {*/}
    </>
  )
}

export default App
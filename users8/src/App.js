import './App.css';
import {useEffect, useState} from "react";


function App() {
  
  const [datos,setDatos]=useState([])  
  useEffect( () => {
    const url='https://randomuser.me/api/?results=3';
    const peticion=fetch(url);
    peticion
      .then( datos=> datos.json() )
      .then( lectura => {        
        lectura.results.map( (persona) => {
          setDatos( (e) =>
            [...e,
              <div key={persona.email}>
                <div>{persona.name.first} {persona.name.last}</div>
                <div>
                  <img src={persona.picture.large} />
                </div>
              </div> ])          
        })              
      })
      .catch(  ()=>  console.log('Se ha producido un error') );
  },[])
      
  return (
    <>
      <h1>Premiados: </h1>
      {datos}
      
    </>
  );
}

export default App;

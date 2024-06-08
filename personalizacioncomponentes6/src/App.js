import {useState} from "react";
//import MiComponente from './MiComponente.jsx';
import Cena from "./Cena";
import './Cena.css';
import './App.css';

function App() {
  const reyes=[
    {
      nombre:"Atanagildo",
      color:"darkolivegreen",
      precio:178      
    },{
      nombre:"Ervigio",
      color:"crimson",
      precio:169
    },{
      nombre:"Ataúlfo",
      color:"peru",
      precio:81
    },{
      nombre:"Leogivildo",
      color:"darkmagenta",
      precio:126
    },{
      nombre:"Recesvinto",
      color:"royalblue",
      precio:141
    },{
      nombre:"Sisebuto",
      color:"teal",
      precio:69
    }
  ]  
  const [total, setTotal] =useState(0);

  return (
    <>
      {/*}
      <h2>Reyes Godos:</h2>
      <MiComponente rey={ {nombre: 'Atanagildo', reses: 2, vivo:false} } />
      <MiComponente rey={ {nombre: 'Ervigio',    reses: 5, vivo:false} } />
      <MiComponente rey={ {nombre: 'Anacondo' } } />
      <MiComponente rey={ {reses: 4, vivo:false} } />
      {*/}

      <h1>Total a pagar: {total}€</h1>
      <div className="cajaCentral">
        < Cena rey={ {nombre:reyes[0].nombre, precio:reyes[0].precio, color:reyes[0].color }  } setTotal={setTotal} />

        < Cena rey={ {nombre:reyes[1].nombre, precio:reyes[1].precio, color:reyes[1].color }  } setTotal={setTotal} />

        < Cena rey={ {nombre:reyes[2].nombre, precio:reyes[2].precio, color:reyes[2].color }  } setTotal={setTotal} />

        < Cena rey={ {nombre:reyes[3].nombre, precio:reyes[3].precio, color:reyes[3].color }  } setTotal={setTotal} />

        < Cena rey={ {nombre:reyes[4].nombre, precio:reyes[4].precio, color:reyes[4].color }  } setTotal={setTotal} />

        < Cena rey={ {nombre:reyes[5].nombre, precio:reyes[5].precio, color:reyes[5].color }  } setTotal={setTotal} />
      </div>
    </>
  );
}

export default App;

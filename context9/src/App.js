import './App.css';
import Pagina1 from "./Pagina1.jsx";
import Pagina2 from "./Pagina2.jsx";
import Pagina3 from "./Pagina3.jsx";
import Colores from "./Colores.jsx";
import {Datos} from "./contexto/Contexto.jsx";

function App() {
  return (
    <>
      <Datos>
        <div className='App'>
          <Pagina1 />
          <Pagina2 />
          <Pagina3 />
        </div>
        <Colores />
      </Datos>
    </>
  );
}

export default App;

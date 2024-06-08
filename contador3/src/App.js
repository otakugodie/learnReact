import React, {useState} from 'react'
import './App.css';
const App = () => {
    
  const [numero1,setNumero1] = useState();
  const [numero2,setNumero2] = useState();
  const [resultado,setResultado] = useState();
  
  const sumar = () =>{
    setResultado(Number(numero1)+Number(numero2));
    
  }

  const modificar1 = (e) =>{
    setNumero1(e.target.value);
  }
  
  const modificar2 = (e) =>{
    setNumero2(e.target.value);
  }
   
  
  return (
    <div className='caja'>
      
      {/*}
      <h1>{contador}</h1>
      <button onClick={ ()=> setContador(--contador) }>Disminuir</button>
      <button onClick={ ()=> setContador(++contador) }>Aumentar</button>
      <button onClick={ () => setContador(0) }>Restablecer</button>
    {*/}

      <input type='number' value={numero1} onChange={modificar1}/> +
      <input type='number' value={numero2} onChange={modificar2}/> -
      <input type='number' value={resultado} readOnly /> 
      <button onClick={sumar} >Sumar</button>
    </div>
  )
}

export default App
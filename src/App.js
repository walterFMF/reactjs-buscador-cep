import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import './styles.css'

import api from './services/api';
import ContainerInputBuscador from './components/containerInputBuscador';

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

  async function handleSearch() {
    if(input === ''){
      alert("Preencha algum cep!")
      return
    }
    try{
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput("");
    }catch (error) {             
      setCep({})
      alert("Ops Erro ao buscar cep");
      console.log(`Error capturado: ${error}`);    
      setInput("");
    }    
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className='containerInput'>
        <ContainerInputBuscador           
          setInput={setInput} 
          handleSearch={handleSearch}
          input={input}
        />
        <button className='buttonSearch'
          onClick={handleSearch}>
          <FiSearch size={25} color="#fff" />
        </button>

      </div>
      {Object.keys(cep).length > 0 && (    
        <main className='main'>
          <h2>CEP: {cep.cep}</h2>
          <span>Rua: {cep.logradouro}</span>
          {Object.keys(cep.complemento).length > 0 && (    
          <span>Complemento: {cep.complemento}</span>
          )}
          <span>{cep.bairro} </span>
          <span>{cep.localidade} - {cep.uf}</span>
        </main>
      )}
    </div>
  );
}

export default App;

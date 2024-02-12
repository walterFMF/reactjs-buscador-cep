import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import './styles.css'

import api from './services/api';

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

        <input
          type='text'
          placeholder='Digite um cep...'
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
          }}
          onKeyUp={(key) => {
            if(key.code == "Enter"){
              handleSearch()
            }
          }}/>

        <button className='buttonSearch'
          onClick={handleSearch}>
          <FiSearch size={25} color="#fff" />
        </button>

      </div>
      {Object.keys(cep).length > 0 && (    
        <main className='main'>
          <h2>CEP: {cep.cep}</h2>
          <span>Rua: {cep.logradouro}</span>
          <span>Complemento: {cep.complemento ?? 'Sem complemento'}</span>
          <span>{cep.bairro} </span>
          <span>{cep.localidade} - {cep.uf}</span>
        </main>
      )}
    </div>
  );
}

export default App;

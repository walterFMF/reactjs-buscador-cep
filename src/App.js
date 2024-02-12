import { useState } from 'react';
import './styles.css'

import api from './services/api';
import ContainerInputBuscador from './components/containerInputBuscador';

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})
  const [showError, setShowError] = useState(false)

  async function handleSearch() {
    if (input === '') {
      alert("Preencha algum cep!")
      return
    }
    try {
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput("");
      setShowError(false)
    } catch (error) {
      setCep({})
      setShowError(true)
      setTimeout(() => {
        setShowError(false)
      }, 3000);
      setInput("");
    }
  }

  return (
      <div className="container">
        <h1 className="title">Busca CEP</h1>
        <div className='containerInput'>
          <ContainerInputBuscador
            setInput={setInput}
            handleSearch={handleSearch}
            input={input}
          />
        </div>
        <div className="toast" hidden={!showError}>CEP Inválido!</div>
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

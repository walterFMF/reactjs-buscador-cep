import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import './styles.css'


function App() {

  const [input, setInput] = useState(``)

  function handleSearch(){
    alert("walter do inpt" + input)
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className='containerInput'>

        <input 
          type='text' 
          placeholder='Digite um cep...'
          value={input}
          onChange={(e)=> {
            console.log(e.target.value)
            setInput(e.target.value)
          }
          }/>

        <button className='buttonSearch'
        onClick={handleSearch}>
          <FiSearch size={25} color="#fff"/>
        </button>

      </div>

      <main className='main'>
        <h2>CEP: 74003222</h2>
        <span>Rua 26</span>        
        <span>complemento</span>
        <span>Bairro cardoso </span>
        <span>Campo Grande </span>
      </main>
    </div>
  );
}

export default App;

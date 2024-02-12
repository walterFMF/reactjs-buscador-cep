import { FiSearch } from 'react-icons/fi'
import './styles.css'
function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className='containerInput'>

        <input type='text' placeholder='Digite um cep...'/>

        <button className='buttonSearch'>
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

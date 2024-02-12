import InputBuscador from "./inputBuscador";
import { FiSearch } from 'react-icons/fi'
export default function ContainerInputBuscador(props) {
    return (
        <>
            <InputBuscador
                setInput={props.setInput}
                handleSearch={props.handleSearch}
                input={props.input}
            />
            <button className='buttonSearch'
                onClick={props.handleSearch}>
                <FiSearch size={25} color="#fff" />
            </button>
        </>
    )
}
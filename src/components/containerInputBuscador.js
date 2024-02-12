import InputBuscador from "./inputBuscador";

export default function ContainerInputBuscador(props){
    return (
        <InputBuscador 
            setInput={props.setInput}             
            handleSearch={props.handleSearch}
            input={props.input}
        />
    )
}
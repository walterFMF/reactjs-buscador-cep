export default function InputBuscador(props) {
    return(
        <input
        type='text'
        placeholder='Digite um cep...'
        value={props.input}
        onChange={(e) => {
          props.setInput(e.target.value)
        }}
        onKeyUp={(key) => {
          if(key.code === "Enter"){
            props.handleSearch()
          }
        }}/>
    )
}
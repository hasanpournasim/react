import "./input.css";


function Input(props){
 
    return(
      <div className="inputWrapper">
        <label>{props.topic}</label>
        <input name={props.name}  onChange={props.handleChange} type="text" />
      </div>

    )
}

export default Input;
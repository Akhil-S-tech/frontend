import React,{useState,useContext,useRef} from 'react'
import { FormContext } from './FormContext';


function FormInput(props) {
  const {
    label, 
    type ="text",
    name,
    value,
    title
  } = props;
  const [message, setMessage] = useState("");

  const handleChange = event => {
    setMessage(event.target.value);
  }
  return (
    <div className="field">
      <h1 className="title">{title}</h1>
      <label className="label" for="the_name">{label}</label>
      <input
      className="input"
        type={type}
        name={name}
        onChange={handleChange}
        defaultValue={value}
        />
    </div>
  )
}

export default FormInput
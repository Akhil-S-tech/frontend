import React from 'react';
import { useForm } from 'react-hook-form';
import './Form.css'
import { useState } from 'react';
// Reusable Form Component
function Form({ template, onSubmit, watchFields, validate }) {

    const [values,setValues]=useState('')
    console.log(values)
    // const handleChange = (event) => {
    //     // 👇 Get input value from "event"
    //     setValues(event.target.value);
    //   };
    let { register, handleSubmit,changeValue, errors, watch, setError, clearErrors } = useForm();
    let { title, fields } = template;

    let watchValues = watch(watchFields);
    validate(watchValues, { errors, setError, clearErrors });

    const renderFields = (fields) => {
        return fields.map(field => {
            let { title, type, name,value,chagedValue, validationProps, dynamic } = field;

            let showField = dynamic ? watchValues[dynamic['field']] === dynamic['value'] : true;

            if(!showField) return null;

            switch (type) {
                case 'text':
                    return (
                        <div key={name} className='m-5'>
                            <label htmlFor={name} className='label'>{title}</label>
                            <input type="text" name={name} id={name} defaultValue={value}  onChange={register(validationProps)} className='input' placeholder={title}/>
                            {errors[name] && <span className="red-text">{errors[name]['message']}</span>}
                        </div>
                    )
                case 'email':
                    return (
                        <div key={name}>
                            <label htmlFor={name}>{title}</label>
                            <input type="email" name={name} id={name}  ref={register(validationProps)} />
                            {errors[name] && <span className="red-text">{errors[name]['message']}</span>}
                        </div>
                    )
                case 'checkbox':
                    return (
                        <div key={name}>
                            <label>
                                <input type="checkbox" name={name} id={name}  ref={register(validationProps)} />
                                <span>{title}</span>
                                {errors[name] && <span className="red-text">{errors[name]['message']}</span>}
                            </label>
                        </div>
                    )
                case 'url':
                    return (
                        <div key={name}>
                            <label htmlFor={name}>{title}</label>
                            <input type="url" name={name} id={name} ref={register(validationProps)} />
                            {errors[name] && <span className="red-text">{errors[name]['message']}</span>}
                        </div>
                    )
                default:
                    return (
                        <div key={name}>
                            <span className="red-text">Invalid Field</span>
                        </div>
                    )
            }


        })
    }

    return (
        <div className='modal-card-body'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h4  className="title">{title}</h4>
                {renderFields(fields)}
                <div className='buttons  is-pulled-right'>                
                    <button type="submit" className='button is-primary'>Submit</button>
                    </div>
            </form>
        </div>
    );
}

export default Form;
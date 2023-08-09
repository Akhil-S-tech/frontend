import React, { useState } from "react";
import Form from "../../components/Forms/Form";
import { useDispatch,useSelector } from "react-redux";
import { addFormCreationToServer } from "../../redux/actions/FormCreationAction";
import { Link, useNavigate } from 'react-router-dom';
function FormCreate() {
  const formGroupList = useSelector((state) => state.formgroup.formGroupList);
const navigate = useNavigate();
    const dispatch = useDispatch();
    const [values, setValues] = useState({
      form_group_id: "",
      form:"",
      form_description:"",
      remark:"",
    });
    const onSubmit = (event) => {
      event.preventDefault()
        dispatch(addFormCreationToServer(values));
        navigate('/formrow', { state: { values } });
  
    };
    return(
  
      <main className="container content box">
      
      <h1 className="title">Create Form</h1>
      
      <form onSubmit={onSubmit}>
      
        <div className="field">
          <label className="label"> Select Form Group</label>
          <div className="select">
      <select className="has-text-centered"  onChange={(e) => {console.log(e.target.value); setValues({ ...values, form_group_id: e.target.value })}}>

      {formGroupList.map((data,index) => {
          return(
            <option key={data.id} value={data.id} >{data.form_group_name}</option>
          )
        })}
      </select>
      </div>
           </div>
      
      
        <div className="field">
          <label className="label">Form Name</label>
          <input type="text"  className="input" onChange={(e) => setValues({ ...values, form: e.target.value })}/>
        </div>

        <div className="field">
          <label className="label">Description</label>
          <input type="text"  className="input" onChange={(e) => setValues({ ...values, form_description: e.target.value })}/>
        </div>
        <div className="field">
          <label className="label">Remark</label>
          <input type="text"  className="input" onChange={(e) => setValues({ ...values, remark: e.target.value })}/>
        </div>
        <div className="field">
          <input type="submit" className="button is-primary" value="Create"/>
        </div>
      </form>
      
      </main>
      
      )
    }

export default FormCreate
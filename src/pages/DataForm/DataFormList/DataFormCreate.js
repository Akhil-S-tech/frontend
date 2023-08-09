import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDataFormListToServer } from "../../../redux/actions/DataFormListAction";

function DataFormCreate() {
    const dispatch = useDispatch();

    const [values, setValues] = useState({
      form_id: "",
      data_form_id:"",
    });
  
    const onSubmit = (event) => {
      event.preventDefault()
      dispatch(addDataFormListToServer(values));
    };
  
    
  
    return (
      <main className="container content box">
      
      <h1 className="title">Data Form</h1>
      
      <form onSubmit={onSubmit}>
      
        <div className="field">
          <label className="label"> Select Form Group</label>
          <div className="select">
      <select className="has-text-centered"  onChange={(e) => {console.log(e.target.value); setValues({ ...values, label_group_id: e.target.value })}}>

      {/* {formGroupList.map((data,index) => {
          return(
            <option key={data.id} value={data.id} >{data.form_group_name}</option>
          )
        })} */}
      </select>
      </div>
           </div>
      
          
           <div className="field">
          <label className="label"> Select Form Group</label>
          <div className="select">
      <select className="has-text-centered"  onChange={(e) => {console.log(e.target.value); setValues({ ...values, label_group_id: e.target.value })}}>

      {/* {formGroupList.map((data,index) => {
          return(
            <option key={data.id} value={data.id} >{data.form_group_name}</option>
          )
        })} */}
      </select>
      </div>
           </div>
  
        <div className="field">
          <input type="submit" className="button is-primary" value="Create"/>
        </div>
      </form>
      
      </main>

  )
}

export default DataFormCreate
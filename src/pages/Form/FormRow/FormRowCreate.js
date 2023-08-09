import React, { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addFormRowToServer } from "../../../redux/actions/FormRowAction";
import { useLocation } from 'react-router-dom';
function FormRowCreate() {
  const { state } = useLocation();
  const labels = useSelector((state) => state.label.labelList);
  const lablegroups = useSelector((state) => state.labelgroup.labelGroupsList);
  const forms = useSelector((state) => state.formcreation.formsList);
  const formGroup = useSelector((state) => state);
      const dispatch = useDispatch();
      const [values, setValues] = useState({
        label_group_id: "",
        label_id:"",
        form_group_id:"",
        form_id:"",
        cluster:""
      });
      const [name,setNames] = useState({
        group:"",
        form:""
      })
      const named= forms.find((i)=>{if(state){
      return i.form===state.values.form}
      return "hai"})
 
      console.log(named)
      useEffect(() => {
        if (named) {
          console.log(named)
          setValues(prevValues => ({
            ...prevValues,
            form_id: named.id,
            form_group_id: named.form_group_id
          }));
        }
      }, [named]);
    
      // setValues({...values,form_id:named.id})
      // setValues({...values,form_group_id:named.form_group_id})
      
      // if()
     console.log(values)
      const onSubmit = (event) => {
        event.preventDefault()
          dispatch(addFormRowToServer(values));
    
      }
  

      return(
    
        <main className="container content box">
        
        <h1 className="title">Adding Rows</h1>
        
        <form onSubmit={onSubmit}>
        
          <div className="field">
            <label className="label"> Select Label Group</label>
            <div className="select">
        <select className="has-text-centered"  onChange={(e) => {console.log(e.target.value); setValues({ ...values, label_group_id: e.target.value })}}>
  
        {lablegroups.map((data,index) => {
            return(
              <option key={data.id} value={data.id} >{data.label_group_name}</option>
            )
          })}
        </select>
        </div>
        </div>
        <div className="field">
            <label className="label"> Select Label</label>
            <div className="select">
        <select className="has-text-centered"  onChange={(e) => {console.log(e.target.value); setValues({ ...values, label_group_id: e.target.value })}}>
  
        {labels.map((data,index) => {
            return(
              <option key={data.id} value={data.id} >{data.label_name}</option>
            )
          })}
        </select>
        </div>
        </div>
        
        
        
          <div className="field">
            <label className="label">Cluster</label>
            <input type="text"  className="input" onChange={(e) => setValues({ ...values, cluster: e.target.value })}/>
          </div>
          <div className="field">
            <input type="submit" className="button is-primary"/>
          </div>
        </form>
        
        </main>
        
        )
      }

export default FormRowCreate
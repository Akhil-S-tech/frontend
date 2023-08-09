import React, { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { addDataFormToServer } from "../../redux/actions/DataFormAction";

function DataFormCreate() {
    const dispatch = useDispatch();
    const dataFormGroupList = useSelector((state) => state.dataformgroup.dataFormGroupList);
    const today = Date.now();

    const current_date=new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(today);
    const [values, setValues] = useState({
      data_form_group_id: "",
      dataform:"",
      description:"",
      status:"",
      version:"",
      // created_date:current_date,
      // updated_date:current_date,
    });
    const onSubmit = (event) => {
      event.preventDefault()
      dispatch(addDataFormToServer(values));
 
    };
  

  
    return (
      <main className="container content box">
      
      <h1 className="title">Data Form</h1>
      
      <form onSubmit={onSubmit}>
      
        <div className="field">
          <label className="label"> Select Form Group</label>
          <div className="select">
      <select className="has-text-centered"  onChange={(e) => {console.log(e.target.value); setValues({ ...values, data_form_group_id: e.target.value })}}>

      {dataFormGroupList.map((data,index) => {
          return(
            <option key={data.id} value={data.id} >{data.data_form_group}</option>
          )
        })}
      </select>
      </div>
           </div>
      
      
        <div className="field">
          <label className="label">Form Name</label>
          <input type="text"  className="input" onChange={(e) => setValues({ ...values, dataform: e.target.value})}/>
        </div>

        <div className="field">
          <label className="label">Description</label>
          <input type="text"  className="input" onChange={(e) => setValues({ ...values, description: e.target.value })}/>
        </div>
        <div className="field">
          <label className="label">Status</label>
          <input type="text"  className="input" onChange={(e) => setValues({ ...values, status: e.target.value })}/>
        </div>
        <div className="field">
          <label className="label">Version</label>
          <input type="text"  className="input" onChange={(e) => setValues({ ...values, version: e.target.value })}/>
        </div>
        <div className="field">
          <input type="submit" className="button is-primary" value="Create"/>
        </div>
      </form>
      
      </main>

  )
}

export default DataFormCreate
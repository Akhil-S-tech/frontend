import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDataFormGroupToServer } from "../../redux/actions/DataFormGroupAction";


function DataFormGroupCreate() {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    data_form_group: "",
    remark: "",

  });
  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(addDataFormGroupToServer(values));
  };

return(
  
<main className="container content box">

<h1 className="title">Create Data Form Group </h1>

<form onSubmit={onSubmit}>
  <div className="field">
    <label className="label">Data Form Group Name</label>
    <input type="text" name="label_name"  className="input" onChange={(e) => setValues({ ...values, data_form_group: e.target.value })}/>
  </div>



  <div className="field">
    <label className="label">Remark</label>
    <input type="text" name="remark"  className="input" onChange={(e) => setValues({ ...values, remark: e.target.value })}/>
  </div>

  <div className="field">
    <input type="submit" className="button is-primary"/>
  </div>
</form>

</main>

)
    
}

export default DataFormGroupCreate
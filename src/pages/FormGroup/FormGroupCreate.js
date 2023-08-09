
// export default FormGroupCreate
import React, { useState } from "react";
import Form from "../../components/Forms/Form";
import { useDispatch } from "react-redux";
import { useSelector}  from'react-redux';
import { addFormGroupToServer } from "../../redux/actions/FormGroupAction";
function FormGroupCreate() {
  const dispatch = useDispatch();


  const [values, setValues] = useState({
    formgroup: "",
    remark:""

  });
  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(addFormGroupToServer(values));
  };

return(
  
<main className="container content box">

<h1 className="title">Create Form Group </h1>

<form onSubmit={onSubmit}>

  <div className="field">
    <label className="label">Form Group Name</label>
    <input type="text" name="formgroup"  className="input" onChange={(e) => setValues({ ...values, formgroup: e.target.value })}/>
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

export default FormGroupCreate
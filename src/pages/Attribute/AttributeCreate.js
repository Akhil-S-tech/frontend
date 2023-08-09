import React, { useState } from "react";
import Form from "../../components/Forms/Form";
import { useDispatch } from "react-redux";
import { addAttributeToServer } from "../../redux/actions/AttributeAction";

function LabelGroupCreate(props) {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    attribute_name: "",
    remark: "",
  });
  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(addAttributeToServer(values));
  };

return(
  
<main className="container content box">

<h1 className="title">Create Attribute </h1>

<form onSubmit={onSubmit}>
  <div className="field">
    <label className="label">Name</label>
    <input type="text" name="label_group_name" id="the_name" className="input" onChange={(e) => setValues({ ...values, attribute_name: e.target.value })}/>
  </div>

  <div className="field">
    <label className="label">Remark</label>
    <input type="text" name="remark" id="remark" className="input" onChange={(e) => setValues({ ...values, remark: e.target.value })}/>
  </div>

  <div className="field">
    <input type="submit" className="button is-primary"/>
  </div>
</form>

</main>

)
}

export default LabelGroupCreate;



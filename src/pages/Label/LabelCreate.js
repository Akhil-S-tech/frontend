import React, { useState } from "react";
import Form from "../../components/Forms/Form";
import { useDispatch } from "react-redux";
import { useSelector}  from'react-redux';
import { addLabelToServer } from "../../redux/actions/LabelAction";
import './styles.css'

function LabelCreate() {
  const dispatch = useDispatch();
  const labelGroupList = useSelector((state) => state.labelgroup.labelGroupsList);
  const attributeList = useSelector((state) => state.attribute.attributeList);

  const [values, setValues] = useState({
    label_group_id: "",
    label_name:"",
    label_type:"",
    // dropdown:"",
    attribute_id: "",
    remark:""

  });
  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(addLabelToServer(values));
  };
console.log(values)
return(
  
<main className="container content box">

<h1 className="title">Create Label </h1>

<form onSubmit={onSubmit}>
  <div className="field">
    <label className="label">Choose Label Group</label>
    <div className="select">
    <select className="has-text-centered"  onChange={(e) =>  setValues({ ...values, label_group_id: e.target.value })}>

      {labelGroupList.map((data,index) => {
          return(
            <option key={data.id} value={data.id} >{data.label_group_name}</option>
          )
        })}
      </select>
      </div>
</div>
  <div className="field">
    <label className="label">Label Name</label>
    <input type="text" name="label_name"  className="input" onChange={(e) => setValues({ ...values, label_name: e.target.value })}/>
  </div>
  <div className="field">
    <label className="label">Label Type</label>
    <div className="select">
  <select onChange={(e) => setValues({ ...values, label_type: e.target.value })}>
    <option value="text">SELECT</option>
    <option value="text">Text</option>
    <option value="long-text">Long Text</option>
    <option value="boolean">Boolean(Yes/No)</option>
    <option value="multi-select">Multi-Select</option>
    <option value="single-select">Single-Select</option>
    <option value="image">Image</option>
    <option value="file">File</option>
    <option value="cluster">Cluster</option>
  </select>
</div>
  </div>
  {/* <div className="field">
    <label className="label">Drop Down</label>
    <input type="text" name="label_name"  className="input" onChange={(e) => setValues({ ...values,: e.target.value })}/>
  </div> */}
  <div className="field">
    <label className="label">Attribute</label>
    <div className="select">
    <select className="has-text-centered" onChange={e => setValues({ ...values, attribute_id: e.target.value })}>

{attributeList.map((data,index) => {
    return(
      <option key={data.id} value={data.id}>{data.attribute_name}</option>

    )
  })}
</select>
</div>
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

export default LabelCreate
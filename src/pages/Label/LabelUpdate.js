import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bulma-components";

import { updateLabelInServer } from "../../redux/actions/LabelAction";


function LabelUpdate(props) {
  const selectedLabel  = useSelector((state) =>{
    return state.attribute.selectedLabel});
   
  const [values, setValues] = useState({
    label_group_id: "",
    label_name:"",
    label_type:"",
    // dropdown:"",
    attribute_id: "",
    remark:""

  });
  const dispatch = useDispatch()
  const navigate = useNavigate();
  
  useEffect(() => {
     if (selectedLabel){

      setValues(selectedLabel);

    }
  }, [selectedLabel]);

  const updateLabel = (event) => {
    event.preventDefault();
    props.onHide();
    dispatch(updateLabelInServer(values))
    navigate("/");  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-model-title-vcenter"
      centered
    >
  <main className="container content box">

	<h1 className="title">Update Label</h1>
  <form onSubmit={updateLabel}>
		<div className="field">
			<label className="label" htmlFor="the_name">Name</label>
			<input type="text" name="name" id="the_name" value={values.label_name}   onChange={(e) => setValues({ ...values, name: e.target.value })} className="input"/>
		</div>

		<div className="field">
			<label className="label" htmlFor="the_remark">Remark</label>
			<input type="remark" name="remark" id="the_remark" className="input" value={values.remark}  onChange={(e) => setValues({ ...values, remark: e.target.value })}/>
		</div>
    <div className="field">
			<label className="label" htmlFor="the_type">Type</label>
			<input type="type" name="type" id="the_type" className="input" value={values.type}  onChange={(e) => setValues({ ...values, type: e.target.value })}/>
		</div>

		<div className="field">
			<input type="submit" className="button is-primary"/>
		</div>
	</form>

</main>
</Modal>
  )
}

export default LabelUpdate
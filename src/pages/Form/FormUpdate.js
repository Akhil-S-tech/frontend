import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateFormInServer } from "../../redux/actions/FormAction";
import { Modal } from "react-bulma-components";

function FormUpdate(props) {
  const selectedForm  = useSelector((state) =>{
    return state.form.selectedForm});
    const [values, setValues] = useState({
      name: "",
      remark: "",
      type:""
    });
  const dispatch = useDispatch()
  const navigate = useNavigate();
  
  useEffect(() => {
     if (selectedForm){

      setValues(selectedForm);

    }
  }, [selectedForm]);

  const updateForm = (event) => {
    event.preventDefault();
    props.onHide();
    dispatch(updateFormInServer(values))
    navigate("/");  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-model-title-vcenter"
      centered
    >
  <main className="container content box">

	<h1 className="title">Update Label Group</h1>
  <form onSubmit={updateForm}>
		<div className="field">
			<label className="label" htmlFor="the_name">Name</label>
			<input type="text" name="name" id="the_name" value={values.name}   onChange={(e) => setValues({ ...values, name: e.target.value })} className="input"/>
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

export default FormUpdate
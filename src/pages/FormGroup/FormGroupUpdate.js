import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateFormGroupInServer } from "../../redux/actions/FormGroupAction";
import { Modal } from "react-bulma-components";

function FormGroupUpdate(props) {
  const selectedFormGroup  = useSelector((state) =>{
    return state.formGroup});
    const [values, setValues] = useState({
      formgroup: "",
      remark: ""
    });
  const dispatch = useDispatch()
  const navigate = useNavigate();
  
  useEffect(() => {
     if (selectedFormGroup){

      setValues(selectedFormGroup);

    }
  }, [selectedFormGroup]);

  const updateFormGroup = (event) => {
    event.preventDefault();
    props.onHide();
    dispatch(updateFormGroupInServer(values))
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
  <form onSubmit={updateFormGroup}>
		<div className="field">
			<label className="label" htmlFor="the_name">Name</label>
			<input type="text" name="name" id="the_name" value={values.formgroup}   onChange={(e) => setValues({ ...values, formgroup: e.target.value })} className="input"/>
		</div>

		<div className="field">
			<label className="label" htmlFor="the_remark">Remark</label>
			<input type="remark" name="remark" id="the_remark" className="input" value={values.remark}  onChange={(e) => setValues({ ...values, remark: e.target.value })}/>
		</div>
  

		<div className="field">
			<input type="submit" className="button is-primary"/>
		</div>
	</form>

</main>
</Modal>
  )
}

export default FormGroupUpdate
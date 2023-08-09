import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateDataFormListInServer } from "../../redux/actions/DataFormListAction";
import { Modal } from "react-bulma-components";

function DataFormUpdate(props) {
  const selectedDataForm  = useSelector((state) =>{
    return state});
    const [values, setValues] = useState({
      name: "",
      remark: "",
      type:""
    });
  const dispatch = useDispatch()
  const navigate = useNavigate();
  
  useEffect(() => {
     if (selectedDataForm){

      setValues(selectedDataForm);

    }
  }, [selectedDataForm]);

  const updateDataForm = (event) => {
    event.preventDefault();
    props.onHide();
    dispatch(updateDataFormListInServer(values))
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
  <form onSubmit={updateDataForm}>
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

export default DataFormUpdate
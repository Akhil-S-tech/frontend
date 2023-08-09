import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateAttributeInServer } from "../../redux/actions/AttributeAction";
import { Modal } from "react-bulma-components";

function AttributeUpdate(props) {
  const selectedAttribute  = useSelector((state) =>{
    return state.attribute.selectedAttribute});
    const [values, setValues] = useState({
      attribute_name: "",
      remark: ""   });
  const dispatch = useDispatch()
  const navigate = useNavigate();
  
  useEffect(() => {
     if (selectedAttribute){

      setValues(selectedAttribute);

    }
  }, [selectedAttribute]);

  const updateAttribute = (event) => {
    event.preventDefault();
    props.onHide();
    dispatch(updateAttributeInServer(values))
    navigate("/attribute");  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-model-title-vcenter"
      centered
    >
  <main className="container content box">

	<h1 className="title">Update Label Group</h1>
  <form onSubmit={updateAttribute}>
		<div className="field">
			<label className="label" htmlFor="the_name">Name</label>
			<input type="text" name="attribute" id="the_name" value={values.attribute_name}   onChange={(e) => setValues({ ...values, attribute_name: e.target.value })} className="input"/>
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

export default AttributeUpdate
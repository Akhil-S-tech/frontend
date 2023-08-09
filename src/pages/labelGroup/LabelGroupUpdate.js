import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateLabelGroupInServer } from "../../redux/actions/LabelGroupAction";
import Form from "../../components/Forms/Form";
import FormInput from "../../components/Forms/FormInput";
import { Modal } from "react-bulma-components";
import './styles.css'


function LabelGroupUpdate(props) {

  const selectedLabelGroup  = useSelector((state) =>{
    return state.labelgroup.selectedLabelGroup});
    const [values, setValues] = useState({
      label_group_name: "",
      remark: "",
    });
    const [remark, setRemark] = useState("");
  const [id, setId] = useState(0);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  
  useEffect(() => {
     if (selectedLabelGroup){

      setValues(selectedLabelGroup);
      setRemark(selectedLabelGroup.remark);
      setId(selectedLabelGroup.id);

    }
  }, [selectedLabelGroup]);

  const updateLabelGroup = (event) => {
    event.preventDefault();
    props.onHide();
    dispatch(updateLabelGroupInServer(values))
    navigate("/");  };

// console.log(name,remark)

  // let template = {
  //   title: "Label Group Editing",
  //   fields: [
  //     {
  //       title: "Name",
  //       type: "text",
  //       name: "name",
  //       // value:name,
        
  //       validationProps: {
  //         required: "Name is mandatory",
  //       },
  //     },
  //     {
  //       title: "Remark Name",
  //       type: "text",
  //       name: "remark",
  //       value:remark,
  //     },
  //   ],
  // };
//   return (
//     <Modal
//     {...props}
//     size="lg"
//     aria-labelledby="contained-model-title-vcenter"
//     centered
//   >
//     <div className="z-index">
//     <div className="group">
//   <Form
//     template={template}
//     watchFields={["name", "remark"]}
//     validate={validate}
//     onSubmit={updateLabelGroup}
//   />
//   </div>
//   </div>
// </Modal>

//   )

return(
  <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-model-title-vcenter"
      centered
    >
  <main className="container content box">

	<h1 className="title">Update Label Group</h1>

	{/* <div className="notification is-danger">
		<p className="heading">Something went wrong. try:</p>
		<ul className="">
			<li>first thing that happened</li>
			<li>second thing that happened</li>
		</ul>
	</div>
	 */}
	{/* <div className="notification is-success">
		<p className="heading">Thank You</p>
		<p>I'll be in touch soon.</p>
	</div> */}

	<form onSubmit={updateLabelGroup}>
		<div className="field">
			<label className="label">Name</label>
			<input type="text" name="labelgroup" value={values.label_group_name}   onChange={(e) => setValues({ ...values, label_group_name: e.target.value })} className="input"/>
		</div>

		<div className="field">
			<label className="label">Remark</label>
			<input type="remark" name="remark" className="input" value={values.remark}  onChange={(e) => setValues({ ...values, remark: e.target.value })}/>
		</div>

		<div className="field">
			<input type="submit" className="button is-primary"/>
		</div>
	</form>

</main>
</Modal>
)
}
// function validate(watchValues, errorMethods) {
//   console.log(watchValues)
// }
// const changeValue = (event) => {
//   // 👇 Get input value from "event"
//   console.log(event.target.value);
// };

export default LabelGroupUpdate;
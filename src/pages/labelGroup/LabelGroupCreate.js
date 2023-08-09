import React, { useState } from "react";
import Form from "../../components/Forms/Form";
import { useDispatch } from "react-redux";
import { addLabelGroupToServer } from "../../redux/actions/LabelGroupAction";

function LabelGroupCreate(props) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [remark, setRemark] = useState("");
  const [values, setValues] = useState({
    label_group_name: "",
    remark: "",
  });
  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(addLabelGroupToServer(values));
    setName("");
    setRemark("");
  };

//   let template = {
//     title: "Label Group Creation",
//     fields: [
//       {
//         title: "Name",
//         type: "text",
//         name: "label_group_name",
//         validationProps: {
//           required: "Name is mandatory",
//         },
//       },
//       {
//         title: "Remark Name",
//         type: "text",
//         name: "remark",
//       },
//     ],
//   };

//   return (
//     <section className="main-content columns is-fullheight">
//     <Form
//       template={template}
//       watchFields={["name", "remark"]}
//       validate={validate}
//       onSubmit={onSubmit}
//     />
//     </section>
//   );
// }

// function validate(watchValues, errorMethods) {}

return(
  
<main className="container content box">

<h1 className="title">Create Label group </h1>

<form onSubmit={onSubmit}>
  <div className="field">
    <label className="label">Name</label>
    <input type="text" name="label_group_name" id="the_name" className="input" onChange={(e) => setValues({ ...values, label_group_name: e.target.value })}/>
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



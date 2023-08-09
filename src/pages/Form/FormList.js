import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFormCreationFromServer,deleteFormCreationFromServer } from "../../redux/actions/FormCreationAction";
import { removeFormCreationFromList,setSelectedFormCreation } from "../../redux/reducers/FormCreationReducer";
import FormUpdate from "./FormUpdate";
function FormList() {
  const formList = useSelector((state) => state.formcreation.formsList );
  const [modalShow, setModalShow] = useState(false);
console.log(formList)
  const dispatch = useDispatch();

  const updateForm = (data) => {
    setModalShow(true);
    dispatch(setSelectedFormCreation(data));
  };

  useEffect(() => {
    dispatch(getFormCreationFromServer());
  }, [dispatch]);

  const deleteForm = (data) => {
    dispatch(deleteFormCreationFromServer(data))
      .unwrap()
      .then(() => {
        dispatch(removeFormCreationFromList(data));
      });
  };
  return (
    <>

    <table className="card table-right">
      <thead>
        <tr className="has-text-centered">
          <th>Form Group</th>
          <th>Form Name</th>
          <th>Form Description</th>
          <th>Remarks</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        
        {formList.map((data,index) => {
          return(
          <tr className="has-text-centered" key={index}>
            <td>{data.form_group.form_group_name}</td>
            <td>{data.form}</td>
            <td>{data.form_description}</td>
            <td>{data.remark}</td>
            <td><button className="mr-5" onClick={() => updateForm(data)}>update</button>
           <button  onClick={() => deleteForm(data)}>Delete</button></td>
          </tr>
          )
        })}
      </tbody>
    </table>
    <FormUpdate
      show={modalShow}
      onHide={() => setModalShow(false)}
    />

    {/* <div show={modalShow} onHide={() => setModalShow(false)} /> */}
  </>  )
}

export default FormList
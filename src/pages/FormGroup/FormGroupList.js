import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFormGroupFromServer,deleteFormGroupFromServer } from "../../redux/actions/FormGroupAction";
import { removeFormGroupFromList,setSelectedFormGroup } from "../../redux/reducers/FormGroupReducer";
import FormGroupUpdate from "./FormGroupUpdate";

function FormGroupList() {
  const formGroupList = useSelector((state) => state.formgroup.formGroupList);
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();

  const updateFormGroup = (data) => {
    setModalShow(true);
    dispatch(setSelectedFormGroup(data));
  };

  useEffect(() => {
    dispatch(getFormGroupFromServer());
  }, [dispatch]);

  const deleteFormGroup = (data) => {
    dispatch(deleteFormGroupFromServer(data))
      .unwrap()
      .then(() => {
        dispatch(removeFormGroupFromList(data));
      });
  };
  return (
    <>
    <table className="card table-right">
      <thead>
        <tr className="has-text-centered">
          <th>Name</th>
          <th>Remark</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        
        {formGroupList.map((data,index) => {
          return(
          <tr className="has-text-centered" key={index}>
            <td>{data.formgroup}</td>
            <td>{data.remark}</td>
            <td><button className="mr-5" onClick={() => updateFormGroup(data)}>update</button>
           <button  onClick={() => deleteFormGroup(data)}>Delete</button></td>
          </tr>
          )
        })}
      </tbody>
    </table>
    <FormGroupUpdate
      show={modalShow}
      onHide={() => setModalShow(false)}
    />

    {/* <div show={modalShow} onHide={() => setModalShow(false)} /> */}
  </>  )
}

export default FormGroupList
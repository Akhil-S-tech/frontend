import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataFormFromServer,deleteDataFormFromServer } from "../../redux/actions/DataFormAction";
import { removeDataFormFromList,setSelectedDataForm } from "../../redux/reducers/DataFormReducer";
import DataFormUpdate from "./DataFormUpdate";

function DataFormList() {
  const dataFormList = useSelector((state) => state.dataform.dataFormList);
  const [modalShow, setModalShow] = useState(false);
console.log(dataFormList)
  const dispatch = useDispatch();

  const updateDataForm = (data) => {
    setModalShow(true);
    dispatch(setSelectedDataForm(data));
  };

  useEffect(() => {
    dispatch(getDataFormFromServer());
  }, [dispatch]);

  const deleteDataForm = (data) => {
    dispatch(deleteDataFormFromServer(data))
      .unwrap()
      .then(() => {
        dispatch(removeDataFormFromList(data));
      });
  };
  return (
    <>
    <table className="card table-right">
      <thead>
        <tr className="has-text-centered">
          <th>Data Form Group Name</th>
          <th>Data Form Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        
        {dataFormList.map((data,index) => {
          return(
          <tr className="has-text-centered" key={index}>
            <td>{data.data_form_group.data_form_group}</td>
            <td>{data.dataform}</td>
            <td><button className="mr-5" onClick={() => updateDataForm(data)}>update</button>
           <button  onClick={() => deleteDataForm(data)}>Delete</button></td>
          </tr>
          )
        })}
      </tbody>
    </table>
    <DataFormUpdate
      show={modalShow}
      onHide={() => setModalShow(false)}
    />

    {/* <div show={modalShow} onHide={() => setModalShow(false)} /> */}
  </>  )
}

export default DataFormList
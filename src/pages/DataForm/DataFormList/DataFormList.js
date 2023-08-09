import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataFormListFromServer,deleteDataFormListFromServer } from "../../../redux/actions/DataFormListAction";
import { removeDataFormListFromList,setSelectedDataFormList } from "../../../redux/reducers/DataFormListReducer";
import DataFormUpdate from "./DataFormUpdate";

function DataFormList() {
  const dataFormList = useSelector((state) => state);
  const [modalShow, setModalShow] = useState(false);

  const dispatch = useDispatch();

  const updateDataForm = (data) => {
    setModalShow(true);
    dispatch(setSelectedDataFormList(data));
  };

  useEffect(() => {
    dispatch(getDataFormListFromServer());
  }, [dispatch]);

  const deleteDataForm = (data) => {
    dispatch(deleteDataFormListFromServer(data))
      .unwrap()
      .then(() => {
        dispatch(removeDataFormListFromList(data));
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
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        
        {/* {dataFormList.map((data,index) => {
          return(
          <tr className="has-text-centered" key={index}>
            <td>{data.name}</td>
            <td>{data.remark}</td>
            <td><button className="mr-5" onClick={() => updateDataForm(data)}>update</button>
           <button  onClick={() => deleteDataForm(data)}>Delete</button></td>
          </tr>
          )
        })} */}
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
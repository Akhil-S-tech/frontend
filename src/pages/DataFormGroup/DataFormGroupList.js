import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataFormGroupFromServer,deleteDataFormGroupFromServer } from "../../redux/actions/DataFormGroupAction";
import { removeDataFormGroupFromList,setSelectedDataFormGroup } from "../../redux/reducers/DataFormGroupReducer";
import DataFormGroupUpdate from "./DataFormGroupUpdate";

function DataFormGroupList() {
  const dataFormGroupList = useSelector((state) => state.dataformgroup.dataFormGroupList);
  console.log(dataFormGroupList)
  const [modalShow, setModalShow] = useState(false);

  const dispatch = useDispatch();

  const updateDataFormGroup = (data) => {
    setModalShow(true);
    dispatch(setSelectedDataFormGroup(data));
  };

  useEffect(() => {
    dispatch(getDataFormGroupFromServer());
  }, [dispatch]);

  const deleteDataFormGroup = (data) => {
    dispatch(deleteDataFormGroupFromServer(data))
      .unwrap()
      .then(() => {
        dispatch(removeDataFormGroupFromList(data));
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
        
        {dataFormGroupList.map((data,index) => {
          return(
          <tr className="has-text-centered" key={index}>
            <td>{data.data_form_group}</td>
            <td>{data.remark}</td>
            <td><button className="mr-5" onClick={() => updateDataFormGroup(data)}>update</button>
           <button  onClick={() => deleteDataFormGroup(data)}>Delete</button></td>
          </tr>
          )
        })}
      </tbody>
    </table>
    <DataFormGroupUpdate
      show={modalShow}
      onHide={() => setModalShow(false)}
    />

    {/* <div show={modalShow} onHide={() => setModalShow(false)} /> */}
  </>  )
}

export default DataFormGroupList
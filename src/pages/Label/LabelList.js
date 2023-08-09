import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLabelFromServer,deleteLabelFromServer } from "../../redux/actions/LabelAction";
import { removeLabelFromList,setSelectedLabel } from "../../redux/reducers/LabelReducer";
import LabelUpdate from "./LabelUpdate";

function LabelList() {
  const labelList = useSelector((state) => state.label.labelList);
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();

  const updateLabel = (data) => {
    setModalShow(true);
    dispatch(setSelectedLabel(data));
  };

  useEffect(() => {
    dispatch(getLabelFromServer());
  }, [dispatch]);

  const deleteLabel = (data) => {
    dispatch(deleteLabelFromServer(data))
      .unwrap()
      .then(() => {
        dispatch(removeLabelFromList(data));
      });
  };
  return (
    <>
    <table className="card table-right">
      <thead>
        <tr className="has-text-centered">
          <th>Label</th>
          <th>Label Group</th>
          <th>label Type</th>
          <th>Drop Down</th>
          <th>Attribute</th>
          <th>Remark</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        
        {labelList.map((data,index) => {
          return(
          <tr className="has-text-centered" key={index}>
            <td>{data.label}</td>
            <td>{data.label_group.label_group_name}</td>
            <td>{data.labeltype}</td>
            <td>{data.dropdown}</td>
            <td>{data.attribute.attribute_name}</td>
            <td>{data.remark}</td>
            <td><button className="mr-5" onClick={() => updateLabel(data)}>update</button>
           <button  onClick={() => deleteLabel(data)}>Delete</button></td>
          </tr>
          )
        })}
      </tbody>
    </table>
    <LabelUpdate
      show={modalShow}
      onHide={() => setModalShow(false)}
    />

    {/* <div show={modalShow} onHide={() => setModalShow(false)} /> */}
  </>  )
}

export default LabelList
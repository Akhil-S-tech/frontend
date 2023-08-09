import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAttributeFromServer,deleteAttributeFromServer } from "../../redux/actions/AttributeAction";
import { removeAttributeFromList,setSelectedAttribute } from "../../redux/reducers/AttributeReducer";
import AttributeUpdate from "./AttributeUpdate";

function AttributeList() {
  const attributeList = useSelector((state) => state.attribute.attributeList);
  const [modalShow, setModalShow] = useState(false);

  const dispatch = useDispatch();

  const updateAttribute = (data) => {
    setModalShow(true);
    dispatch(setSelectedAttribute(data));
  };

  useEffect(() => {
    dispatch(getAttributeFromServer());
  }, [dispatch]);

  const deleteAttribute = (data) => {
    dispatch(deleteAttributeFromServer(data))
      .unwrap()
      .then(() => {
        dispatch(removeAttributeFromList(data));
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
        
        {attributeList.map((data,index) => {
          return(
          <tr className="has-text-centered" key={index}>
            <td>{data.attribute_name}</td>
            <td>{data.remark}</td>
            <td><button className="mr-5" onClick={() => updateAttribute(data)}>update</button>
           <button  onClick={() => deleteAttribute(data)}>Delete</button></td>
          </tr>
          )
        })}
      </tbody>
    </table>
    <AttributeUpdate
      show={modalShow}
      onHide={() => setModalShow(false)}
    />

    {/* <div show={modalShow} onHide={() => setModalShow(false)} /> */}
  </>  )
}

export default AttributeList
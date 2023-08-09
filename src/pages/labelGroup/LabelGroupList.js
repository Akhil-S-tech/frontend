import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getLabelGroupFromServer,
  deleteLabelGroupFromServer,
} from "../../redux/actions/LabelGroupAction";
import {
  removeLabelGroupFromList,
  setSelectedLabelGroup,
} from "../../redux/reducers/LabelGroupReducer";

import LabelGroupUpdate from "./LabelGroupUpdate";



const LabelGroupList = () => {
  const labelGroupList = useSelector((state) => state.labelgroup.labelGroupsList);
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();

  const updateLabelGroup = (data) => {
    setModalShow(true);
    dispatch(setSelectedLabelGroup(data));
  };

  useEffect(() => {
    dispatch(getLabelGroupFromServer());
  }, [dispatch]);

  const deleteLabelGroup = (data) => {
    dispatch(deleteLabelGroupFromServer(data))
      .unwrap()
      .then(() => {
        dispatch(removeLabelGroupFromList(data));
      });
  };
// return(
// <section class="section">
//   <div class="container">
//     <div class="b-table">
//       <div class="field table-mobile-sort">
//         <div class="field has-addons">
//           <div class="control is-expanded">
//             <span class="select is-fullwidth">
//               <select>
//                 <option>Name</option>
//                 <option>Company</option>
//                 <option>City</option>
//               </select>
//             </span>
//           </div>
//           <div class="control">
//             <button class="button is-primary">
//               <span class="icon is-small"><i class="mdi mdi-arrow-up"></i></span>
//             </button>
//           </div>
//         </div>
//       </div>
//       <div class="table-wrapper has-mobile-cards">
//         <table class="table is-fullwidth is-striped is-hoverable is-fullwidth">
//           <thead>
//           <tr>
//             <th></th>
//             <th class="is-current-sort is-sortable">
//               <div class="th-wrap">
//                 Name <span class="icon is-small"><i class="mdi mdi-arrow-up"></i></span>
//               </div>
//             </th>
//             <th class="is-sortable">
//               <div class="th-wrap">
//                 Company <span class="icon is-small is-invisible"><i class="mdi mdi-arrow-up"></i></span>
//               </div>
//             </th>
//             <th class="is-sortable">
//               <div class="th-wrap">
//                 City <span class="icon is-small is-invisible"><i class="mdi mdi-arrow-up"></i></span>
//               </div>
//             </th>
//             <th>Progress</th>
//             <th>Created</th>
//             <th></th>
//           </tr>
//           </thead>
//           <tbody>
//           <tr>

//             <td data-label="Name">Rebecca Bauch</td>
//             <td data-label="Company">Daugherty-Daniel</td>
//             <td data-label="City">South Cory</td>
//             <td data-label="Progress" class="is-progress-cell">
//               <progress max="100" class="progress is-small is-primary" value="79">79</progress>
//             </td>
//             <td data-label="Created">
//               <small class="has-text-grey is-abbr-like" title="Oct 25, 2020">Oct 25, 2020</small>
//             </td>
//             <td class="is-actions-cell">
//               <div class="buttons is-right">
//                 <button class="button is-small is-primary" type="button">
//                   <span class="icon"><i class="mdi mdi-eye"></i></span>
//                 </button>
//                 <button class="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
//                   <span class="icon"><i class="mdi mdi-trash-can"></i></span>
//                 </button>
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <td class="is-image-cell">
//               <div class="image">
//                 <img src="https://avatars.dicebear.com/v2/initials/felicita-yundt.svg" class="is-rounded"/>
//               </div>
//             </td>
//             <td data-label="Name">Felicita Yundt</td>
//             <td data-label="Company">Johns-Weissnat</td>
//             <td data-label="City">East Ariel</td>
//             <td data-label="Progress" class="is-progress-cell">
//               <progress max="100" class="progress is-small is-primary" value="67">67</progress>
//             </td>
//             <td data-label="Created">
//               <small class="has-text-grey is-abbr-like" title="Jan 8, 2019">Jan 8, 2019</small>
//             </td>
//             <td class="is-actions-cell">
//               <div class="buttons is-right">
//                 <button class="button is-small is-primary" type="button">
//                   <span class="icon"><i class="mdi mdi-eye"></i></span>
//                 </button>
//                 <button class="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
//                   <span class="icon"><i class="mdi mdi-trash-can"></i></span>
//                 </button>
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <td class="is-image-cell">
//               <div class="image">
//                 <img src="https://avatars.dicebear.com/v2/initials/mr-larry-satterfield-v.svg" class="is-rounded"/>
//               </div>
//             </td>
//             <td data-label="Name">Mr. Larry Satterfield V</td>
//             <td data-label="Company">Hyatt Ltd</td>
//             <td data-label="City">Windlerburgh</td>
//             <td data-label="Progress" class="is-progress-cell">
//               <progress max="100" class="progress is-small is-primary" value="16">16</progress>
//             </td>
//             <td data-label="Created">
//               <small class="has-text-grey is-abbr-like" title="Dec 18, 2020">Dec 18, 2020</small>
//             </td>
//             <td class="is-actions-cell">
//               <div class="buttons is-right">
//                 <button class="button is-small is-primary" type="button">
//                   <span class="icon"><i class="mdi mdi-eye"></i></span>
//                 </button>
//                 <button class="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
//                   <span class="icon"><i class="mdi mdi-trash-can"></i></span>
//                 </button>
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <td class="is-image-cell">
//               <div class="image">
//                 <img src="https://avatars.dicebear.com/v2/initials/mr-broderick-kub.svg" class="is-rounded"/>
//               </div>
//             </td>
//             <td data-label="Name">Mr. Broderick Kub</td>
//             <td data-label="Company">Kshlerin, Bauch and Ernser</td>
//             <td data-label="City">New Kirstenport</td>
//             <td data-label="Progress" class="is-progress-cell">
//               <progress max="100" class="progress is-small is-primary" value="71">71</progress>
//             </td>
//             <td data-label="Created">
//               <small class="has-text-grey is-abbr-like" title="Sep 13, 2020">Sep 13, 2020</small>
//             </td>
//             <td class="is-actions-cell">
//               <div class="buttons is-right">
//                 <button class="button is-small is-primary" type="button">
//                   <span class="icon"><i class="mdi mdi-eye"></i></span>
//                 </button>
//                 <button class="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
//                   <span class="icon"><i class="mdi mdi-trash-can"></i></span>
//                 </button>
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <td class="is-image-cell">
//               <div class="image">
//                 <img src="https://avatars.dicebear.com/v2/initials/barry-weber.svg" class="is-rounded"/>
//               </div>
//             </td>
//             <td data-label="Name">Barry Weber</td>
//             <td data-label="Company">Schulist, Mosciski and Heidenreich</td>
//             <td data-label="City">East Violettestad</td>
//             <td data-label="Progress" class="is-progress-cell">
//               <progress max="100" class="progress is-small is-primary" value="80">80</progress>
//             </td>
//             <td data-label="Created">
//               <small class="has-text-grey is-abbr-like" title="Jul 24, 2019">Jul 24, 2019</small>
//             </td>
//             <td class="is-actions-cell">
//               <div class="buttons is-right">
//                 <button class="button is-small is-primary" type="button">
//                   <span class="icon"><i class="mdi mdi-eye"></i></span>
//                 </button>
//                 <button class="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
//                   <span class="icon"><i class="mdi mdi-trash-can"></i></span>
//                 </button>
//               </div>
//             </td>
//           </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   </div>
// </section>

// )

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
          
          {labelGroupList.map((data,index) => {
            return(
            <tr className="has-text-centered" key={index}>
              <td>{data.label_group_name}</td>
              <td>{data.remark}</td>
              <td><button className="mr-5" onClick={() => updateLabelGroup(data)}>update</button>
             <button  onClick={() => deleteLabelGroup(data)}>Delete</button></td>
            </tr>
            )
          })}
        </tbody>
      </table>
      <LabelGroupUpdate
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      {/* <div show={modalShow} onHide={() => setModalShow(false)} /> */}
    </>
  );
};

export default LabelGroupList;

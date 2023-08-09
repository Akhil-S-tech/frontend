import { configureStore } from "@reduxjs/toolkit";
import LabelGroupReducer from "../reducers/LabelGroupReducer";
import AttributeReducer from "../reducers/AttributeReducer";
// import LabelReducer from "../reducers/LabelReducer";
import LabelReducer from '../reducers/LabelReducer'
import FormGroupReducer from "../reducers/FormGroupReducer";
import FormReducer from "../reducers/FormReducer";
import DataFormGroupReducer from "../reducers/DataFormGroupReducer";
import DataFormReducer from "../reducers/DataFormReducer";
import FormCreationReducer from "../reducers/FormCreationReducer";
import FormRowReducer from "../reducers/FormRowReducer";
import DataFormListReducer from "../reducers/DataFormListReducer";
export const store = configureStore({
  
  reducer: {
    labelgroup: LabelGroupReducer,
    attribute:AttributeReducer,
    label:LabelReducer,
    formgroup:FormGroupReducer,
    form:FormReducer,
    dataformgroup:DataFormGroupReducer,
    dataform:DataFormReducer,
    dataformlist:DataFormListReducer,
    formcreation:FormCreationReducer,
    formrow:FormRowReducer
  },
});
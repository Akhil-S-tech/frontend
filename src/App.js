import React from "react";
import { BrowserRouter , Router, Routes, Route } from 'react-router-dom';
import LabelGroup from "./pages/labelGroup/LabelGroup";
import LabelGroupList from "./pages/labelGroup/LabelGroupList";
import Attribute from "./pages/Attribute/Attribute";
import Label from "./pages/Label/Label";
import FormGroup from "./pages/FormGroup/FormGroup";
import Form from "./pages/Form/Form";
import FormRow from "./pages/Form/FormRow/FormRow";
import DataFormGroup from "./pages/DataFormGroup/DataFormGroup";
import DataForm from "./pages/DataForm/DataForm";
import DataFormAppend from "./pages/DataForm/DataFormList/DataFormAppend";
import './App.css'
import Navbar from "./components/Navbar/Navbar";


function App() {


  return(
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<LabelGroup/>} />
        <Route path='/attribute' element={<Attribute />}/>
        <Route path='/label' element={<Label/>} />
        <Route path='/formGroup' element={<FormGroup/>} />
        <Route path='/formcreation' element={<Form/>} />
        <Route path='/formrow' element={<FormRow/>} />
        <Route path='/dataFormGroup' element={<DataFormGroup/>} />
        <Route path='/dataForm' element={<DataForm/>} />
        <Route path='/dataformlist' element={<DataFormAppend/>} />
        <Route path='/products' element={<LabelGroupList/>} />
        <Route path='/products' element={<LabelGroupList/>} />
        <Route path='/products' element={<LabelGroupList/>} />
        <Route path='/products' element={<LabelGroupList/>} />
        <Route path='/products' element={<LabelGroupList/>} />

      </Routes>
    </BrowserRouter>
  </> 
  )
  // return (
  //   <>
  //       <MenuBar/>
  //   <Container className="content box mt-6 random">


  //     <div className="is-justify-content-center">
  //     <div className="colums">
  //     <LabelGroup />
  //     </div>

  //     </div>
  //     </Container>
  //   </>
  // );
}

export default App;

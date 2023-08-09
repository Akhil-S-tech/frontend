import React from 'react'
import FormRowCreate from './FormRowCreate'
import FormRowList from './FormRowList'
import { Container } from "react-bulma-components";


function FormRow() {
  return (
    <Container className="content box mt-6 random">
    <FormRowCreate />
    <FormRowList />
  </Container>
  )
}

export default FormRow
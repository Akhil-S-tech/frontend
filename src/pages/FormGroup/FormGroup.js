import React from 'react'
import { Container } from "react-bulma-components";
import FormGroupCreate from './FormGroupCreate'
import FormGroupList from './FormGroupList'

function FormGroup() {
  return (
    <Container className="content box mt-6 random">
      <FormGroupCreate />
      <FormGroupList />
    </Container>
  )
}

export default FormGroup
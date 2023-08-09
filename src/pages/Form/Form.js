import React from 'react'
import { Container } from "react-bulma-components";
import FormCreate from './FormCreate'
import FormList from './FormList'

function Form() {
  return (
    <Container className="content box mt-6 random">
      <FormCreate />
      <FormList />
    </Container>
  )
}

export default Form
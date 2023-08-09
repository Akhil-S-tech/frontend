import React from 'react'
import { Container } from "react-bulma-components";
import DataFormGroupCreate from './DataFormGroupCreate'
import DataFormGroupList from './DataFormGroupList'

function DataFormGroup() {
  return (
    <Container className="content box mt-6 random">
      <DataFormGroupCreate />
      <DataFormGroupList />
    </Container>
  )
}

export default DataFormGroup
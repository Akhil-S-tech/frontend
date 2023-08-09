import React from 'react'
import { Container } from "react-bulma-components";
import DataFormCreate from './DataFormCreate'
import DataFormList from './DataFormList'

function DataFormAppend() {
  return (
    <Container className="content box mt-6 random">
      <DataFormCreate />
      <DataFormList />
    </Container>
  )
}

export default DataFormAppend
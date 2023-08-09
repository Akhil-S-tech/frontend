import React from 'react'
import { Container } from "react-bulma-components";
import AttributeCreate from './AttributeCreate'
import AttributeList from './AttributeList'

function Attribute() {
  return (
    <Container className="content box mt-6 random">
      <AttributeCreate />
      <AttributeList />
    </Container>
  )
}

export default Attribute
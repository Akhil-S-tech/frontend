import React from 'react'
import { Container } from "react-bulma-components";
import LabelCreate from './LabelCreate'
import LabelList from './LabelList'

function Label() {
  return (
    <Container className="content box mt-6 random">
      <LabelCreate />
      <LabelList />
    </Container>
  )
}

export default Label
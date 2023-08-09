import React from "react";
import { Container } from "react-bulma-components";

import LabelGroupCreate from "./LabelGroupCreate";
import LabelGroupList from "./LabelGroupList";
function LabelGroup() {
  return (
    <Container className="content box mt-6 random">
      <LabelGroupCreate />
      <LabelGroupList />
    </Container>
  );
}
// Add this in your component fi
export default LabelGroup;

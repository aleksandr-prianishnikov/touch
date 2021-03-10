import React from "react";
import TouchBar from "./TouchBar";
import styled from "styled-components";

const Text1 = styled.p`
  margin: 0;
  margin-bottom: 31px;
  text-align: center;
  font-size: 70px;
  font-weight: bold;
`;

export default function CustomiseTouchBar() {
  return (
    <div>
      <Text1 style={{paddingTop: "250px"}}>Customise your TouchBar</Text1>
      <TouchBar/>
      <Text1 style={{paddingBottom: "300px"}}>you choose.</Text1>
    </div>
  )
}
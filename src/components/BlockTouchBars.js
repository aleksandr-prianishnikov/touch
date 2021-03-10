import React from "react";

import touchbar from "../pages/assets/touchbars/touchbar.png";
import touchbar1 from "../pages/assets/touchbars/touchbar1.png";
import touchbar2 from "../pages/assets/touchbars/touchbar2.png";
import img from "../pages/assets/img.png";
import styled from "styled-components";
import TouchBar from "./TouchBar";

const Img = styled.img`
  width: 100%;
  padding-bottom: 60px;
`;

const Text = styled.p`
  color: #CCCCCC;
  margin: 0;
  margin-top: 5px;
  margin-left: 25px;
  margin-bottom: 100px;
  font-size: 36px;
`;

export default function BlockTouchBars() {
  return (
    <div>
      <div>
        <TouchBar/>
        <Text>Swipe to set up volume and brightness</Text>
      </div><
      div>
        <TouchBar/>
        <Text>Swipe to set up volume and brightness</Text>
      </div>
      <div>
        <TouchBar/>
        <Text>Swipe to set up volume and brightness</Text>
      </div>




      <Img style={{paddingTop: "180px"}} src={img}/>
    </div>
  )
}
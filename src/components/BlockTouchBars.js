import React from "react";

import touchbar from "../pages/assets/touchbars/touchbar.png";
import touchbar1 from "../pages/assets/touchbars/touchbar1.png";
import touchbar2 from "../pages/assets/touchbars/touchbar2.png";
import img from "../pages/assets/img.png";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  padding-bottom: 60px;
`;

export default function BlockTouchBars() {
  return (
    <div>
      <Img src={touchbar}/>
      <Img src={touchbar1}/>
      <Img src={touchbar2}/>

      <Img style={{paddingTop: "180px"}} src={img}/>
    </div>
  )
}
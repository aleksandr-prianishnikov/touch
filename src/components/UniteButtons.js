import React from "react";

import touch from "../pages/assets/touch.png";
import styled from "styled-components";

const Text1 = styled.p`
  margin: 0;
  text-align: left;
  padding-left: 5.4%; //65px  
  margin-top: 20%; //200px
  padding-bottom: 1.6%; //23px
  font-size: 6.6vw; //80px
  font-style: normal;
  font-weight: 700;
`;

const Text2 = styled.p`
  margin: 0;
  padding-bottom: 5vw; // 60px
  padding-left: 5.4%; //65px  
  font-size: 3.5vw; //44px
  //font-size: 44px; //44px
  font-style: normal;
  line-height: 53px;
  letter-spacing: 0em;
  font-weight: 400;
  text-align: left;
`;

const Img = styled.img`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  width: 100%;

  right: 0;
`;

export default function UniteButtons() {
  return (
    <div>
      <Text1>Unite buttons in groups </Text1>
      <Text2>It will be helpful to manage your Touch bar </Text2>
      <Img src={touch}/>
    </div>
  )
}
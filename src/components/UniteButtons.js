import React from "react";

import touch from "../pages/assets/touch.png";
import styled from "styled-components";

const Text1 = styled.p`
  margin: 0;
  text-align: left;
  padding-left: 65px;
  margin-top: 200px;
  padding-bottom: 23px;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: 97px;
  letter-spacing: 0em;
`;

const Text2 = styled.p`
  margin: 0;
  padding-bottom: 60px;
  padding-left: 65px;
  font-size: 44px;
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

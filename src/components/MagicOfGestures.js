import React from "react";
import styled from "styled-components";

const Text1 = styled.p`
  margin: 0;
  margin-bottom: 23px;
  padding: 0;
  padding-top: 139px;

  text-align: center;
  padding-left: 65px;
  margin-top: 350px;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: 97px;
  letter-spacing: 0em;
`;

const Text2 = styled.p`
  margin: 0;
  margin-bottom: 104px;
  padding: 0;
  margin-top: auto;

  text-align: center;
  font-size: 44px;
  font-style: normal;
  line-height: 53px;
  letter-spacing: 0em;
  font-weight: 400;
`;

export default function MagicOfGestures() {
  return (
    <div>
      <Text1>Magic of gestures</Text1>
      <Text2>Tap, swipe and zoom for faster using</Text2>
    </div>
  )
}
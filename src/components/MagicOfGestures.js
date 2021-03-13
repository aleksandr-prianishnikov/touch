import React from "react";
import styled from "styled-components";

const Text1 = styled.p`
  margin: 0;
  margin-bottom: 1.4vw; //23px 
  padding: 0;

  text-align: center;
  padding-left: 5.3vw; // 65px 
  margin-top: 40%; //350px
  font-size: 6vw; //80px
  font-style: normal;
  font-weight: 700;
  line-height: 8.5vw; // 97px
  letter-spacing: 0em;
`;

const Text2 = styled.p`
  margin: 0;
  margin-bottom: 9vw; // 104px
  padding: 0;
  margin-top: auto;

  text-align: center;
  font-size: 3.5vw; //44px
  font-style: normal;
  line-height: 4vw; //53px
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
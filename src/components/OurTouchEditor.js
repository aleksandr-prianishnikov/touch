import React from "react";
import block from "../pages/assets/block.png"
import styled from "styled-components";


const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

const Div1 = styled.div`
  margin: 0;

  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: 10px;
`;

const Text = styled.p`
  margin: 0;
  padding-bottom: 23px;

  padding-left: 20px;
  padding-right: 10px;
  text-align: left;
  font-size: 70px;
  font-weight: bold;
`;

const Text1 = styled.p`
  margin: 0;
  padding-bottom: 23px;

  padding-left: 20px;
  padding-right: 10px;

  margin-top: 10px;
  font-size: 44px;
  font-style: normal;
  font-weight: 500;
  line-height: 53px;
  letter-spacing: 0em;
  text-align: left;
`;

const Text2 = styled.p`
  margin: 0;
  padding-bottom: 23px;


  padding-left: 20px;
  padding-right: 10px;

  margin-top: 10px;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: left;
`;

export default function OurTouchEditor() {
  return (
    <Div>
      <img src={block}/>

      <Div1>
        <Text>Our Touch Editor</Text>
        <Text1>Create elegant presets & readily switch between!</Text1>
        <Text2>You can create fully customizable buttons, triggers and actions</Text2>
      </Div1>

    </Div>
  )
}
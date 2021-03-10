import React from "react";
import block from "../pages/assets/block.png"
import styled from "styled-components";
import MediaQuery from "react-responsive";
import bg from "../pages/assets/bg.png";


const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Div1 = styled.div`
  margin: 0;

  //display: flex;
  //flex-direction: column;
  //align-self: center;
  //margin-top: 10px;
`;

const Text = styled.p`
  margin: 0;
  //padding-bottom: 23px;
  padding-bottom: 2.6%;

  padding-left: 20px;
  padding-right: 10px;
  text-align: left;
  //font-size: 70px;
  font-size: 6vw;
  
  font-weight: bold;
`;

const Text1 = styled.p`
  margin: 0;
  //padding-bottom: 23px;
  padding-bottom: 2.6%;

  padding-left: 20px;
  padding-right: 10px;

  margin-top: 10px;
  //font-size: 44px;
  font-size: 3.4vw;
  font-style: normal;
  font-weight: 500;
  line-height: 53px;
  letter-spacing: 0em;
  text-align: left;
`;

const Text2 = styled.p`
  margin: 0;
  padding-bottom: 2%;


  padding-left: 20px;
  padding-right: 10px;

  margin-top: 1%;
  //font-size: 32px;
  font-size: 2.7vw;
  font-style: normal;
  //font-weight: 400;
  //line-height: 39px;
  letter-spacing: 0em;
  text-align: left;
`;

const Img = styled.img`
  //width: 100%;
  //max-width: 725px;
`;

const Img1 = styled.img`
  width: 50%;
  max-width: 725px;
`;


export default function OurTouchEditor() {
  return (
    <Div>
      <MediaQuery minWidth={723}>
        <Img src={block} />
      </MediaQuery>
      <MediaQuery maxWidth={723}>
        <Img1 src={block}/>
      </MediaQuery>

      <Div1>
        <Text>Our Touch Editor</Text>
        <Text1>Create elegant presets & readily switch between!</Text1>
        <Text2>You can create fully customizable buttons, triggers and actions</Text2>
      </Div1>



    </Div>
  )
}
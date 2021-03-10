import React from "react";
import {makeStyles} from "@material-ui/core";
import header2 from "./assets/header2.png";
import bg2 from "./assets/bg2.png";
import bg from "./assets/bg.png";
import header from "./assets/header.png";

import styled from "styled-components"

import MediaQuery from 'react-responsive'



const Container = styled.div`
  margin: 0;
  position: relative;
  height: auto;
`;

const Header = styled.img`
  //display: block;
  //margin: auto;
  margin-top: 100px;
  width: 900px;
  height: 529px;
 position: absolute;
  padding-left: 150px;
  //vertical-align: bottom;
  z-index: 1;


  //margin-left: auto;
  
`;

const Bg = styled.img`
  //position: absolute; 
  margin: 0;
  width: 100%;
  vertical-align: bottom;
  filter: blur(3px);

`;

const Div = styled.div`
  width: 70%;
  height: auto;
`;

const Img = styled.img`
  margin: 0;
  width: 100%;
  padding: 0;
  height: auto;
    
`;

// const Img1 = styled.img`
//   margin: 0;
//   width: 100%;
//   max-width: 725px;
//   padding: 0;
//   height: auto;
//   vertical-align: bottom;
// `;

export default function ImageHeader() {
  return (
  <Container>
    <Header src={header}/>
    <Bg src={bg}/>
  </Container>

  )
}
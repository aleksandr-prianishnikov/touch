import React from "react";
import bg from "./assets/bg.png";
import header from "./assets/header.png";
import styled from "styled-components"

const Container = styled.div`
  margin: 0;
  position: relative;
  height: auto;
`;

const Header = styled.img`
  width: 100%;
  margin-top: 4.5vw;//100px
  width: 90vw; // 900px
  height: 52vw; //529px
 position: absolute;
  padding-left: 4.7vw;// 150px
  z-index: 1;
`;

const Bg = styled.img`
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

export default function ImageHeader() {
  return (
  <Container>
    <Header src={header}/>
    <Bg src={bg}/>
  </Container>
  )
}
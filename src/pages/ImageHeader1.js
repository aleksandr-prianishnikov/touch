import React from "react";
import {makeStyles} from "@material-ui/core";
import header2 from "./assets/header2.png";
import bg2 from "./assets/bg2.png";
import styled from "styled-components"
import MediaQuery from "react-responsive";

const Container = styled.div`
  margin: 0;
  position: relative;
  height: auto;
`;

const Header = styled.img`
  position: absolute;
  width: 100%;
`;

const Bg = styled.img`
  margin: 0;
  width: 100%;
`;

// const Header2 = styled.img`
//   position: absolute;
//   width: 100%;
//   max-width: 725px;
// `;
//
// const Bg2 = styled.img`
//   margin: 0;
//   width: 100%;
//   max-width: 725px;
// `;

export default function ImageHeader1() {
  return (
    <Container>
      {/*<MediaQuery minWidth={723}>*/}
        <Header src={header2}/>
        <Bg src={bg2}/>
      {/*</MediaQuery>*/}
    {/*  <MediaQuery maxWidth={723}>*/}
    {/*    <Header2 src={header2}/>*/}
    {/*    <Bg2 src={bg2}/>*/}
    {/*</MediaQuery>*/}
</Container>
)
}
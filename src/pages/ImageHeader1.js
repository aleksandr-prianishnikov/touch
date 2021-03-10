import React from "react";
import {makeStyles} from "@material-ui/core";
import header2 from "./assets/header2.png";
import bg2 from "./assets/bg2.png";
import styled from "styled-components"

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

export default function ImageHeader1() {
  return (
    <Container>
      <Header src={header2}/>
      <Bg src={bg2}/>
    </Container>
  )
}
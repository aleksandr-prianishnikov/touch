import React from "react";
import {makeStyles} from "@material-ui/core";
import BlockTouchBars from "../components/BlockTouchBars";
import styled from "styled-components"

import logo from "../pages/assets/logo.png";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding-top: 234px;
`;

const Img = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 250px;
  height: 103px;
`;

const Text = styled.p`
  padding-bottom: 146px;
  text-align: center;
`

export default function Footer() {
  return (
    <Div>
      <Img src={logo}/>
      <Text >soon in 2021</Text>
    </Div>

  )
}


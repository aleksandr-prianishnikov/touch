import React from "react";
import {makeStyles} from "@material-ui/core";
import header2 from "./assets/header2.png";
import bg2 from "./assets/bg2.png";
import bg from "./assets/bg.png";
import styled from "styled-components"

import MediaQuery from 'react-responsive'


const Div = styled.div`
  width: 100%;
  height: auto;
`;

const Img = styled.img`
  margin: 0;
  width: 100%;
  padding: 0;
  height: auto;
  vertical-align: bottom;
`;

export default function ImageHeader() {
  return (

    <Div>
      <Img src={bg}/>
    </Div>

  )
}
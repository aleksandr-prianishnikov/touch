import React from "react";
import styled from "styled-components"
import logo from "../pages/assets/logo.png";

const Div = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding-top: 19vw; //234px
`;

const Img = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 20vw; //250px
  height: 8.5vw; //103px
`;

const Text = styled.p`
  padding-bottom: 9vw; //146px
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


import React, {useRef} from "react";
import TouchBar from "./TouchBar";
import styled from "styled-components";
import gsap from "gsap";
import {useIntersection} from "react-use";


const Text1 = styled.p`
  //margin: 0;
  margin-bottom: 5vw;
  text-align: center;
  font-size: 6vw;
  font-weight: bold;
`;

export default function CustomiseTouchBar() {

  return (
    <div>
      {/*<Text1 style={{paddingTop: "250px"}}>Customise your TouchBar</Text1>*/}
      <Text1 style={{paddingTop: "25%"}}>Customise your TouchBar</Text1>
      <TouchBar />
      <Text1 style={{paddingBottom: "25%"}}>you choose.</Text1>
    </div>
  )
}
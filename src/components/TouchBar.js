import React from "react";
import {Button, makeStyles, withStyles} from "@material-ui/core";
import {green, grey} from '@material-ui/core/colors';
import {blue} from "@material-ui/core/colors";
import styled from "styled-components";
import light_icon from "../pages/assets/icons/light_icon.png";
import light2_icon from "../pages/assets/icons/light2_icon.png";
import spotify_icon from "../pages/assets/icons/spotify_icon.png";
import sound from "../pages/assets/icons/sound_icon.png";
import soundoff from "../pages/assets/icons/soundoff_icon.png";
import sun from "../pages/assets/icons/sun_icon.png";


import btnLight from "../pages/assets/touchbar/light.png";

const Div = styled.div`
  display: flex;
  width: 1100px;
  margin-left: 50px;
  margin-right: 50px;
  background-color: #303030;
  justify-content: space-around;
  border-radius: 10px;
`;

const Text = styled.p`
  //font-size: 24px;
  //font-style: normal;
  //font-weight: 400;
  //line-height: 29px;
  //letter-spacing: 0em;
  //text-align: left;
  color: white;
`

// const Button1 = styled.button`
//   width: 125px;
//   height: 48px;
//   margin: 5px;
//   border-radius: 10px;
//   background-color: grey;
// `;

const ButtonLight = styled.button`
  width: 100px;
  height: 200px;
`;

const ColorButton = withStyles((theme) => ({
  root: {
    width: "100px",
    height: "40px",
    marginTop: "5px",
    marginBottom: "5px",
    textColor: "#FFFFFF",


    // margin: "5px",
    borderRadius: "10px",

    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: grey[700],
    '&:hover': {
      backgroundColor: grey[800],
    },
  },
}))(Button);

export default function TouchBar() {
  return (
    <Div>
      <ColorButton>esc</ColorButton>
      <ColorButton><img src={light_icon} height="20px" width="44px"/></ColorButton>
      <ColorButton>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="46.000000pt" height="24.000000pt" viewBox="0 0 46.000000 24.000000" preserveAspectRatio="xMidYMid meet">

          <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
          </g>
        </svg>
      </ColorButton>
      <ColorButton><img src={light2_icon} height="12px" width="34px"/></ColorButton>
      <img src={spotify_icon}/>
      <Text>Boulevard Depo - OFFTOP</Text>
      <ColorButton><img src={sound} height="12px" width="34px"/></ColorButton>
      <ColorButton><img src={soundoff} height="12px" width="34px"/></ColorButton>
      <ColorButton><img src={sun} height="12px" width="34px"/></ColorButton>
      <p>1</p>
      <p>85%</p>
      <p>13:12</p>
    </Div>
)
}
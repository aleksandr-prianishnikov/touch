import React from "react";
import {Box, makeStyles} from "@material-ui/core";
import TouchBar from "../components/TouchBar";
import {touch_bar} from "../index";
import bg from "../pages/assets/bg.png";
import header2 from "../pages/assets/header2.png";
import bg2 from "../pages/assets/bg2.png";
import Header2 from "./Header2";
import Header from "./Header";
import Block1 from "../components/Block1";
import Block2 from "../components/Block2";
import Block3 from "../components/Block3";
import BlockTouchBars from "../components/BlockTouchBars";
import Footer from "./Footer";
import Block from "../components/Block";

const useStyles = makeStyles((theme) => ({

}));

export default function Main() {
    const classes = useStyles();
    return (
        <div>
            <Block/>
            <Block1/>
            <Block2/>
            <Block3/>
            <BlockTouchBars/>
        </div>
    )
}
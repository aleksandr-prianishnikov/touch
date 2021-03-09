import React from "react";
import {makeStyles} from "@material-ui/core";
import header2 from "./assets/header2.png";
import bg2 from "./assets/bg2.png";
import bg from "./assets/bg.png";

const useStyles = makeStyles((theme) => ({
    bg2: {
        margin: 0,
        // backgroundImage: 'url(' + bg2 + ')',
        // backgroundSize: 'cover',
        // overflow: 'hidden',
        // background: url(bg2),
        // paddingTop: "5px",
        width: "100%",
    },


    header_container: {
        margin: 0,
        position: "relative",
        height: "auto",

    },
    header2: {
        // paddingTop: "50px",
        // zIndex: "1",
        // zIndex:
        // margin: 0,
        position: "absolute",

        width: "100%",
    },

    bg1: {
        margin:0,
        width: "100%",
        padding: "0",
        height: "auto",
        verticalAlign: "bottom"

    },

    exz: {
        lineHeight: "1px" /* Межстрочное расстояние */
    }

}));

export default function Header2() {
    const classes = useStyles();
    return (
        <div className={classes.header_container}>
            <img className={classes.header2} src={header2}/>
            <img className={classes.bg2} src={bg2}/>
        </div>
    )
}
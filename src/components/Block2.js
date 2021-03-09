import React from "react";
import {makeStyles} from "@material-ui/core";

import touch from "../pages/assets/touch.png";

const useStyles = makeStyles((theme) => ({

    root: {
        // display: "flex",
        // justifyContent: "flex-start",
        // margin: "0",
        // padding: "0",

    },
    text1: {

        margin: 0,

        textAlign: "left",
        paddingLeft: "65px",
        marginTop: "200px",
        paddingBottom: "23px",
        // fontFamily: "Inter",
        fontSize: "80px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "97px",
        letterSpacing: "0em",

    },
    text2: {
        margin: 0,
        paddingBottom: "60px",
        paddingLeft: "65px",
        // fontFamily: "Inter",
        fontSize: "44px",
        fontStyle: "normal",
        lineHeight: "53px",
        letterSpacing: "0em",
        fontWeight: "400",

        textAlign: "left",
    },
    img: {
        display: "flex",
        // paddingLeft: "322px",
        justifyContent: "flex-end",
        position: "absolute",
        right: "0",
    }
}));

export default function Block2() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
                <p className={classes.text1}>Unite buttons in groups </p>
                <p className={classes.text2}>It will be helpful to manage your Touch bar </p>
            <div>
                <img className={classes.img} src={touch}/>
            </div>

        </div>
    )
}
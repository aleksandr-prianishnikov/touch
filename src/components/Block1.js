import React from "react";
import {makeStyles} from "@material-ui/core";
import block from "../pages/assets/block.png"

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "row",
    },
    root1: {
        margin: 0,

        display: "flex",
        flexDirection: "column",
        // marginTop: "auto"
        alignSelf: "center",
        marginTop: "10px",
        // paddingTop: "10px",

    },
    text: {
        margin: 0,
        paddingBottom: "23px",

        paddingLeft: "20px",
        paddingRight: "10px",
        textAlign: "left",


        // textAlign: "center",
        fontSize: "70px",
        fontWeight: "bold",
    },
    text1: {
        margin: 0,
        paddingBottom: "23px",

        paddingLeft: "20px",
        paddingRight: "10px",

        marginTop: "10px",
        fontSize: "44px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "53px",
        letterSpacing: "0em",
        textAlign: "left",
    },
    text2: {
        margin: 0,
        paddingBottom: "23px",


        paddingLeft: "20px",
        paddingRight: "10px",

        marginTop: "10px",
        // fontFamily: "Inter",
        fontSize: "32px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "39px",
        letterSpacing: "0em",
        textAlign: "left",
    },
    text3: {
        margin: 0,



        paddingLeft: "20px",
        paddingRight: "10px",

        marginTop: "10px",
        fontSize: "44px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "53px",
        letterSpacing: "0em",
        textAlign: "left",
    }


}));

export default function Block1() {
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <img src={block}/>

            <div className={classes.root1}>
                <p className={classes.text}>Our Touch Editor</p>
                <p className={classes.text1}>Create elegant presets & readily switch between!</p>
                <p className={classes.text2}>You can create fully customizable buttons, triggers and actions</p>
            </div>

        </div>
    )
}
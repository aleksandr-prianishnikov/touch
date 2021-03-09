import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({


    text1: {
        margin: 0,
        marginBottom: "23px",
        padding: 0,



        paddingTop: "139px",
        textAlign: "center",
        paddingLeft: "65px",
        marginTop: "350px",
        // fontFamily: "Inter",
        fontSize: "80px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "97px",
        letterSpacing: "0em",
    },
    text2: {
        margin: 0,
        marginBottom: "104px",
        padding: 0,


        marginTop: "auto",

        textAlign: "center",
        // fontFamily: "Inter",
        fontSize: "44px",
        fontStyle: "normal",
        lineHeight: "53px",
        letterSpacing: "0em",
        fontWeight: "400",

    },
}));

export default function Block3() {
    const classes = useStyles();
    return (
        <div>
            <p className={classes.text1}>Magic of gestures</p>
            <p className={classes.text2}>Tap, swipe and zoom for faster using</p>
        </div>
    )
}
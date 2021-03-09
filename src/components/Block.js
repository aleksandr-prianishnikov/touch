import React from "react";
import { makeStyles } from "@material-ui/core";
import TouchBar from "./TouchBar";

const useStyles = makeStyles((theme) => ({
    text1: {
        margin: 0,
        marginBottom: "31px",
        textAlign: "center",
        fontSize: "70px",
        fontWeight: "bold",


    },
    text2: {
        display: "flex",
        marginTop: "31px",

        paddingTop: "160px"
        // paddingTop:


    }
}));

export default function Block() {
    const classes = useStyles();
    return (
        <div>
            <p style={{paddingTop: "250px"}} className={classes.text1}>Customise your TouchBar</p>
            <TouchBar/>
            <p style={{paddingBottom: "300px"}} className={classes.text1}>you choose.</p>
        </div>
    )
}
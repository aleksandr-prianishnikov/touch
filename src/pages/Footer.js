import React from "react";
import { makeStyles } from "@material-ui/core";
import BlockTouchBars from "../components/BlockTouchBars";

import logo from "../pages/assets/logo.png";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        // justifyContent: "center",
        flexDirection: "column",
        marginLeft: "auto",
        marginRight: "auto",

        paddingTop: "234px",

    },

    img: {

        marginLeft: "auto",
        marginRight: "auto",
        width: "250px",
        height: "103px",
    },

    text: {
        paddingBottom: "146px",
        textAlign: "center",


    }
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img className={classes.img} src={logo}/>
            <p className={classes.text}>soon in 2021</p>
        </div>
    )
}


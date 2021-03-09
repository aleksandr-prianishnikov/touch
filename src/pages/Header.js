import React from "react";
import {makeStyles} from "@material-ui/core";
import header2 from "./assets/header2.png";
import bg2 from "./assets/bg2.png";
import bg from "./assets/bg.png";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "auto",
    },

    img: {
        margin: "0",
        width: "100%",
        padding: "0",
        height: "auto",
        verticalAlign: "bottom"

    },
}));

export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img className={classes.img} src={bg}/>
        </div>
    )
}
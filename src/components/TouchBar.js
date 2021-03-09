import React from "react";
import {Button, makeStyles, withStyles} from "@material-ui/core";
import { green, grey } from '@material-ui/core/colors';

import btnLight from "../pages/assets/touchbar/light.png";




const useStyles = makeStyles((theme) => ({
    root: {
        // backGround: "#fc3", /* Цвет фона */
        display: "flex",
        width: "1100px",
        marginLeft: "50px",
        marginRight: "50px",
        backgroundColor: "#303030",
        justifyContent: "space-around",
        borderRadius: "10px",

    },
    btn1: {
        width: "100",
        height: "200",
        borderRadius: "10px",
    },
    // btn2: {
    //     width: "300",
    //     height: "300",
    // },
    btnLight: {
        width: "100",
        height: "200",
        borderRadius: "10px",
        backgroundImage: btnLight,
},
    img: {
        width: "100px",

    }

}));

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(grey[500]),
        backgroundColor: grey[700],
        '&:hover': {
            backgroundColor: grey[800],
        },
    },
}))(Button);

export default function TouchBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ColorButton className= {classes.btn1}>esc</ColorButton>
            <button>

            </button>

            <ColorButton className= {classes.btn1}>esc</ColorButton>

            <ColorButton className= {classes.btn1}>esc</ColorButton>

            <ColorButton className= {classes.btn1}>esc</ColorButton>
            <ColorButton className= {classes.btn1}>esc</ColorButton>
        </div>
    )
}
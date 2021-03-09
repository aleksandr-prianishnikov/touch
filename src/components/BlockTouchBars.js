import React from "react";
import { makeStyles } from "@material-ui/core";

import touchbar from "../pages/assets/touchbars/touchbar.png";
import touchbar1 from "../pages/assets/touchbars/touchbar1.png";
import touchbar2 from "../pages/assets/touchbars/touchbar2.png";
import img from "../pages/assets/img.png";

const useStyles = makeStyles((theme) => ({
    img: {
        width: "100%",
        paddingBottom: "60px",
    }
}));

export default function BlockTouchBars() {
    const classes = useStyles();
    return (
        <div>
            <img className={classes.img} src={touchbar}/>
            <img className={classes.img} src={touchbar1}/>
            <img className={classes.img} src={touchbar2}/>

            <img style={{paddingTop: "180px"}} className={classes.img} src={img}/>
        </div>
    )
}
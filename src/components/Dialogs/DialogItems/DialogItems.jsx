import React from "react";
import classes from "./DialogItems.module.css";
import { NavLink } from "react-router-dom";

const DialogItems = (props) => {
  return (
    <div className={classes.dialog}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};


export default DialogItems;

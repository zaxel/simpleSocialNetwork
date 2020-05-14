import React from "react";
import classes from "./Messages.module.css";



const Messages = (props) => {
  return <div class={classes.message}>
  {props.message}
  </div>;
};



export default Messages;

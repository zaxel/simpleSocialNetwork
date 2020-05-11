import React from "react";
import classes from "./Message.module.css";



const Message = (props) => {
  return <div class={classes.message}>{props.messageItem}</div>;
};



export default Message;

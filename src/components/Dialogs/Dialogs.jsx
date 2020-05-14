import React from "react";
import DialogItem from './DialogItems/DialogItems';
import Message from './Messages/Message';
import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
  
  

  let dialogsElements = props.state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let dialogsMessages = props.state.messages.map((message) => (
    <Message messageItem={message.message} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>{dialogsMessages}</div>
    </div>
  );
};

export default Dialogs;

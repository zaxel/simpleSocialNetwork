import React from "react";
import MessageSectionContainer from './MessagesSection/MessageSectionContainer';
import DialogItem from './DialogItems/DialogItems';
import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        <MessageSectionContainer
        store={props.store}/>
      </div>
    </div>
  );
};

export default Dialogs;

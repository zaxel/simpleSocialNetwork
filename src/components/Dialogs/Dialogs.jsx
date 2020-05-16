import React from "react";
import DialogItem from './DialogItems/DialogItems';
import MessageSectionContainer from './MessagesSection/MessageSectionContainer';
import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
  
  let state = props.store.getState();

  let dialogsElements = state.dialogsPage.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  // let dialogsMessages = props.state.messages.map((message) => (
  //   <Message messageItem={message.message} />
  // ));

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

import React from "react";
import DialogItem from './DialogItems/DialogItems';
import MessageSection from './MessagesSection/MessageSection';
import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
  
  

  let dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
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
        <MessageSection 
        messages={props.dialogsPage.messages} 
        dispatch={props.dispatch} 
        newMessageText={props.dialogsPage.newMessageText}/>
      </div>
    </div>
  );
};

export default Dialogs;

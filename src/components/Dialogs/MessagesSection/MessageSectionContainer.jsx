import React from "react";
import {addMessageActionCreator, addUpdateNewMessageCreator} from './../../../redux/DialogsReducer';
import MessageSection from "./MessageSection";





const MessageSectionContainer = (props) => {

  let state = props.store.getState();

  let sendMessage = ()=>{
    props.store.dispatch(addMessageActionCreator());
    
  }
  
  let onMessageChange = (message) => {
    // let message = e.target.value;
    props.store.dispatch(addUpdateNewMessageCreator(message));
  
  }


  return (
    <MessageSection 
    UpdateNewMessage={onMessageChange} 
    onSendMessage={sendMessage}
    messages={state.dialogsPage.messages} 
    dispatch={state.dispatch} 
    newMessageText={state.dialogsPage.newMessageText}
    />
  );
};



export default MessageSectionContainer;

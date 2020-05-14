import React from "react";
import classes from "./MessageSection.module.css";
import Messages from "./Messages/Messages";
import {addMessageActionCreator, addUpdateNewMessageCreator} from './../../../redux/state';





const MessageSection = (props) => {


  let postMessageItem = props.messages.map((post) => (
    <Messages message={post.message} />
  ));
  
  
  let sendMessage = ()=>{
    props.dispatch(addMessageActionCreator());
    
  }
  
  let onMessageChange = (e) => {
    let message = e.target.value;
    props.dispatch(addUpdateNewMessageCreator(message));
  
  }


  return (
    <div className={classes.postBlock}>
      <h3>My Messages</h3>
      <div>
        <div>
          <textarea onChange={onMessageChange} value={props.newMessageText}/>
        </div>
        <div>
          <button onClick={sendMessage}>Add Post</button>
          <button>Remove</button>
        </div>
      </div>
      <div>{postMessageItem}</div>
    </div>
  );
};



export default MessageSection;

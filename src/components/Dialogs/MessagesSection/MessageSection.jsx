import React from "react";
import classes from "./MessageSection.module.css";
import Messages from "./Messages/Messages";
// import MessageSectionContainer from "./MessageSectionContainer";
import MessageSectionContainer from "react-redux";




const MessageSection = (props) => {


  let postMessageItem = props.messages.map((post) => (
    <Messages message={post.message} />
  ));
  
  
  let onSendMessageClick = ()=>{
    props.onSendMessage();
    // props.dispatch(addMessageActionCreator());
    
  }
  
  let onMessageChange = (e) => {
    let message = e.target.value;
    // props.dispatch(addUpdateNewMessageCreator(message));
    props.UpdateNewMessage(message);
  }


  return (
    <div className={classes.postBlock}>
      <h3>My Messages</h3>
      <div>{postMessageItem}</div>
      <div>
        <div>
          <textarea onChange={onMessageChange} value={props.newMessageText}/>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Add Post</button>
          <button>Remove</button>
        </div>
      </div>
      
    </div>
  );
};



export default MessageSection;

import React from "react";
import classes from "./MessageSection.module.css";
import Messages from "./Messages/Messages";
import {addMessageActionCreator, addUpdateNewMessageCreator} from './../../../redux/state';





const MessageSection = (props) => {


  let postMessageItem = props.messages.map((post) => (
    <Messages message={post.message} />
  ));
  
  let newMessageRef = React.createRef();
  
  let sendMessage = ()=>{
    props.dispatch(addMessageActionCreator());
    
  }
  
  let onMessageChange = () => {
    let message = newMessageRef.current.value;
    props.dispatch(addUpdateNewMessageCreator(message));
  
  }


  return (
    <div className={classes.postBlock}>
      <h3>My Messages</h3>
      <div>
        <div>
          <textarea onChange={onMessageChange} ref={newMessageRef} value={props.newMessageText}/>
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

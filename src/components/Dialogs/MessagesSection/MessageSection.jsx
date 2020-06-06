import React from 'react';
import classes from './MessageSection.module.css';
import Messages from './Messages/Messages';
import { reduxForm, Field } from 'redux-form';
import {required, maxLength} from './../../../utils/validators/Validators';
import {RequiredFieldTextarea} from './../../common/FormsControls/FormsControls';

const maxLength15 = maxLength(15);


const MessageSectionForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <div>
          <Field component={RequiredFieldTextarea}  name={'message'} validate={[required, maxLength15]}/>
        </div>
        <div>
          <button>Add Post</button>
          {/* <button>Remove</button> */}
        </div>
    </form>
  )
}

const MessageSectionReduxForm = reduxForm({form: 'MessageSectionForm'})(MessageSectionForm);

const MessageSection = (props) => {


  let postMessageItem = props.messages.map((post) => (
    <Messages message={post.message} />
  ));
  
  const onSubmit =(formData) =>{
    // alert(formData.message)
    props.onSendMessage(formData.message);
  }
  return (
    <div className={classes.postBlock}>
      <h3>My Messages</h3>
      <div>{postMessageItem}</div>
      <MessageSectionReduxForm onSubmit={onSubmit}/>
    </div>
  );
};



export default MessageSection;

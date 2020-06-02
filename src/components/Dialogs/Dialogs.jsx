import React from "react";
import MessageSectionContainer from './MessagesSection/MessageSectionContainer';
import DialogItem from './DialogItems/DialogItems';
import classes from './Dialogs.module.css';
import {Redirect} from 'react-router-dom';

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));


    // if (!props.isAuth) return <Redirect to={"/login"}/>

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

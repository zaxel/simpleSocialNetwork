import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={classes.dialog}>
      <NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return(
    <div class={classes.message}>
      {props.messageItem}
    </div>
  );
}

const Dialogs = (props) => {


  let dialogsData = [
    { id: 1, name: "Mark" },
    { id: 2, name: "John" },
    { id: 3, name: "Sarah" },
    { id: 4, name: "Jessie" },
    { id: 5, name: "Andrew" },
  ];

  let messagesData = [
    { id: 1, message: "Hi!" },
    { id: 2, message: "Are you Ok?" },
    { id: 3, message: "Please let me know." },
    { id: 4, message: "Thanks< I'm allright!" },
    { id: 5, message: "Ohh, thanks god!" },
    { id: 6, message: "Handle backend logic or databases;" },
    { id: 7, message: "Under the hood, it uses Babel and webpack, but you don’t need to know anything about them." },
  ];
  




  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
        <div className={classes.dialog + " " + classes.active}>
          <NavLink to="/dialogs/2">John</NavLink>
        </div>
       
      </div>
      <div className={classes.messages}>
        <Message messageItem = {messagesData[0].message} />
        <Message messageItem = {messagesData[1].message} />
        <Message messageItem = {messagesData[2].message} />
        <Message messageItem = {messagesData[3].message} />
        <Message messageItem = {messagesData[4].message} />
        <Message messageItem = {messagesData[5].message} />
        <Message messageItem = {messagesData[6].message} />
      </div>
    </div>
  );
};

export default Dialogs;

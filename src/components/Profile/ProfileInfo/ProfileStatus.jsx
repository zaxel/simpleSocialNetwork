import React, { useState, useEffect } from 'react';
import classes from "./ProfileInfo.module.css";

const ProfileStatus =(props) => {

  //  let stateWithSetState = useState(false);
  //  let editMode = stateWithSetState[0];
  //  let setEditMode = stateWithSetState[1];
  // **Same as below

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  
  useEffect(()=>{
    setStatus(props.status)
  }, [props.status]);

  const activateEditMode = () => {
    props.isOwner && setEditMode(true);
  };
  
  const deActivateEditMode = () => {
    setEditMode(false);
    
    props.updateUserStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
      
  }
  


  
  return(
    <div className={classes.profileStatus}>
    {!editMode &&
      <div className={classes.profileInactiveStatus}>
        <span onClick={activateEditMode}>{props.status || "----"}</span>
        {props.isOwner&&<div className={classes.stausHelp}>what's going on arround?</div>}
      </div>
    }
    {editMode &&
      <div >
        <input onChange={onStatusChange} value={status}   autoFocus={true} onBlur={deActivateEditMode}/>
      </div>
    }
    </div>
  );
  
}
export default ProfileStatus;

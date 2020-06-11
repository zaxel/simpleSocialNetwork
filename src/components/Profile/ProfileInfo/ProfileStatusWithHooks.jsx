import React, { useState, useEffect } from 'react';
import classes from "./ProfileInfo.module.css";

const ProfileStatusWithHooks =(props) => {

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
    setEditMode(true);
    };
  
  const deActivateEditMode = () => {
    setEditMode(false);
    
    props.updateUserStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
      
    }
  


  
  return(
    <>
    {!editMode &&
      <div >
        <span onClick={activateEditMode}>{props.status || "----"}</span>
      </div>
    }
    {editMode &&
      <div >
        <input onChange={onStatusChange} value={status}   autoFocus={true} onBlur={deActivateEditMode}/>
      </div>
    }
    </>
  );
  




}
export default ProfileStatusWithHooks;

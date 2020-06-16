import React, { useState, useEffect } from 'react';
import classes from "./ProfileInfo.module.css";

const ProfileDescription =(props) => {

  //  let stateWithSetState = useState(false);
  //  let editMode = stateWithSetState[0];
  //  let setEditMode = stateWithSetState[1];
  // **Same as below

  let [editMode, setEditMode] = useState(false);
  let [profile, setProfile] = useState(props.profile);
  
  let userId = props.authorizedUserId;

  useEffect(()=>{
    setProfile(props.profile)
  }, [props.profile]);

  const activateEditMode = () => {
    props.isOwner && setEditMode(true);
  };
  
  const deActivateEditMode = () => {
    setEditMode(false);
    const profileObject = {
      userId,
      aboutMe: "я некруто чувак 1001%",
      contacts: {
          facebook: "facebook.com",
          github: "github.com",
          instagram: "instagra.com/sds",
          mainLink: null,
          twitter: "https://twitter.com/@sdf",
          vk: "vk.com/dimych",
          website: null,
          youtube: null
      },
      lookingForAJob: true,
      lookingForAJobDescription: "не ищу but making fun",
      fullName: profile

      
    }
    props.updateProfile(profileObject);
  }

  const onStatusChange = (e) => {
    setProfile(e.currentTarget.value)
      
  }
  


  
  return(
    <>
    {!editMode &&
      <div >
        <span onClick={activateEditMode}>{props.profile.fullName || "----"}</span>
      </div>
    }
    {editMode &&
      <div >
        <input onChange={onStatusChange} value={profile.fullName}   autoFocus={true} onBlur={deActivateEditMode}/>
      </div>
    }
    </>
  );
  
}
export default ProfileDescription;

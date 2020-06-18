import React, { useState} from 'react';
import classes from "./ProfileInfo.module.css";
import Preloader from './../../common/Preloader/Preloader';
import profileHeader from './../../../assets/images/profileHeader.jpg';

import userPhoto from './../../../assets/images/user.jpg';

import ProfileDescription from './ProfileDescription';
import ProfileDescriptionForm from './ProfileDescriptionForm';

const ProfileInfo = (props) => {
  let [editProfileMode, setEditProfileMode] = useState(false);

  if(!props.profile){
    return(
      <Preloader/> 
    );
  }

  const onMainPhotoSelected = (e) =>{
    if(e.target.files.length)
    {props.savePhoto(e.target.files[0])};
  }

  

  const activateEditProfileMode = () => {
    props.isOwner && setEditProfileMode(true);
  };
  
  const deActivateProfileEditMode = () => {
    setEditProfileMode(false);
    
    // props.updateUserStatus(status);
  }


  return (
    <div>
      <div>
        <img src={profileHeader} />
      </div>
      <div className={classes.descriptionBlock}>
        <div className={classes.userPhoto}>
          <div className={classes.userPhotoBlock}>
            <img
              src={
                props.profile.photos.small
                  ? props.profile.photos.small
                  : userPhoto
              }
            />
            {props.isOwner && (
              <input type={"file"} onChange={onMainPhotoSelected} />
            )}
          </div>
          <div className={classes.editProfile}>
          {(props.isOwner && !editProfileMode) ?
            <button onClick={activateEditProfileMode}>edit profile</button> :
            props.isOwner && <button onClick={deActivateProfileEditMode}>save profile</button>}
          </div>
        </div>

        <div className={classes.userDescrContainer}>
        {!editProfileMode ? <ProfileDescription
            isOwner={props.isOwner}
            profile={props.profile}
            status={props.status}
            updateUserStatus={props.updateUserStatus}
            savePhoto={props.savePhoto}
            updateProfile={props.updateProfile}
            authorizedUserId={props.authorizedUserId}
          /> :
          <ProfileDescriptionForm/>}
        </div>
      </div>
      <hr />
    </div>
  );
}



export default ProfileInfo;

import React, { useState, useEffect} from 'react';
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

  const initialValues = {
    aboutMe: props.profile.aboutMe,
    facebook: props.profile.contacts.facebook,
    github: props.profile.contacts.github,
    instagram: props.profile.contacts.instagram,
    mainLink: props.profile.contacts.mainLink,
    twitter: props.profile.contacts.twitter,
    vk: props.profile.contacts.vk,
    website: props.profile.contacts.website,
    youtube: props.profile.contacts.youtube,
    lookingForAJob: props.profile.lookingForAJob,
    lookingForAJobDescription: props.profile.lookingForAJobDescription,
    fullName: props.profile.fullName,
  };


  return (
    <div>
      <div>
        <img src={profileHeader} />
      </div>
      <div className={classes.descriptionBlock}>
        <div className={classes.userPhotoContainer}>
          <div className={classes.userPhotoBlock}>
            <div className={classes.userImgContainer}>
              <img
                src={
                  props.profile.photos.small
                    ? props.profile.photos.small
                    : userPhoto
                }
              />
            </div>
            
            {props.isOwner && (
              <div className={classes.uploadButtonContainer}>
                <label for='file-upload' className={classes.uploadButton}>
                  <p>Upload Photo</p>
                </label>
                <input id='file-upload' type={"file"} onChange={onMainPhotoSelected} />
              </div>
            )}
          </div>
          <div className={classes.editProfile}>
          {(props.isOwner && !editProfileMode) &&
            <button onClick={activateEditProfileMode}>edit profile</button>}
          </div>
        </div>

        <div className={classes.userDescrContainer}>
        {!editProfileMode ? <ProfileDescription
            isOwner={props.isOwner}
            profile={props.profile}
            status={props.status}
            updateUserStatus={props.updateUserStatus}
            savePhoto={props.savePhoto}
            authorizedUserId={props.authorizedUserId}
          /> :
          <ProfileDescriptionForm 
          authorizedUserId={props.authorizedUserId} 
          updateProfile={props.updateProfile}
          isOwner={props.isOwner}
          deActivateProfileEditMode={deActivateProfileEditMode}
          initialValues={initialValues}
          />}
        </div>
      </div>
      <hr />
    </div>
  );
}



export default ProfileInfo;

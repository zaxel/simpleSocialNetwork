import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {RequiredFieldTextarea, RenderFieldInput, CreateField} from './../../common/FormsControls/FormsControls';
import {required, minLength, maxLength, /*isUrlValid*/ alphaNumeric} from './../../../utils/validators/Validators';
import classes from "./ProfileInfo.module.css";

const maxLength20 = maxLength(20);
const maxLength200 = maxLength(200);
const minLeight5 = minLength(5);

const ProfileForm = ({handleSubmit, error}) => {
  
  return(
  <div className={classes.profileForm}>
    <form onSubmit={handleSubmit} >
      <div>Name:</div>
      {CreateField('NAME', RenderFieldInput, [required, minLeight5, maxLength20], 'fullName', 'text', alphaNumeric)}
      <div>About me:</div>
      {CreateField('ABOUT ME', RequiredFieldTextarea, [minLeight5, maxLength200], 'aboutMe', 'text', null)}
      <div className={classes.profileSocialsContainer}>
        <div className={classes.profileSocials}>Socials:</div>
        <div>WebSite:</div>
        {CreateField('Your WebSite', RenderFieldInput, [minLeight5, maxLength200, /*isUrlValid*/], 'website', 'text', null)}
        <div>MainLink:</div>
        {CreateField('Main Link', RenderFieldInput, [minLeight5, maxLength200, /*isUrlValid*/], 'mainLink', 'text', null)}
        <div>GitHub:</div>
        {CreateField('GitHub', RenderFieldInput, [minLeight5, maxLength200, /*isUrlValid*/], 'github', 'text', null)}
        <div>VK:</div>
        {CreateField('VK', RenderFieldInput, [minLeight5, maxLength200, /*isUrlValid*/], 'vk', 'text', null)}
        <div>Facebook:</div>
        {CreateField('Facebook', RenderFieldInput, [minLeight5, maxLength200, /*isUrlValid*/], 'facebook', 'text', null)}
        <div>Instagram:</div>
        {CreateField('Instagram', RenderFieldInput, [minLeight5, maxLength200, /*isUrlValid*/], 'instagram', 'text', null)}
        <div>Twitter:</div>
        {CreateField('Twitter', RenderFieldInput, [minLeight5, maxLength200, /*isUrlValid*/], 'twitter', 'text', null)}
        <div>youTube:</div>
        {CreateField('youTube', RenderFieldInput, [minLeight5, maxLength200, /*isUrlValid*/], 'youtube', 'text', null)}
      </div>
      {/* <div>Looking For Job:</div>
      {CreateField('', 'input', [], 'lookingForAJob', 'checkbox', null)} */}
        <label className={classes.profileLabel}>
                    {CreateField(null, 'input', [], 'lookingForAJob', 'checkbox', null, ' Looking For Job')}
                </label>
      <div className={classes.jobDescription}>Job Description:</div>
      {CreateField('Job Description', RequiredFieldTextarea, [minLeight5, maxLength200], 'lookingForAJobDescription', 'text', null)}
      {error && <div className={classes.error}> {error} </div>}
      <div>
        <button >SAVE PROFILE</button>
      </div>
    </form>
  </div>
    
  );
}


const ProfileReduxForm = reduxForm({form: "profile"})(ProfileForm);

const ProfileDescriptionForm =(props) => {
  const onSubmit = (formData) =>{
    let userId = props.authorizedUserId;
    const profileObject = {
      userId,
      aboutMe: (formData.aboutMe ? formData.aboutMe : "some user description here"),
      contacts: {
          facebook: formData.facebook,
          github: formData.github,
          instagram: formData.instagram,
          mainLink: formData.mainLink,
          twitter: formData.twitter,
          vk: formData.vk,
          website: formData.website,
          youtube: formData.youtube
      },
      lookingForAJob: (formData.lookingForAJob ? formData.lookingForAJob : false),
      lookingForAJobDescription: (formData.lookingForAJobDescription ? formData.lookingForAJobDescription : "-----"),
      fullName: formData.fullName

      
    }
    
    props.updateProfile(profileObject).then(()=>{
        props.deActivateProfileEditMode();
    })
    
  }
  return(
    <>
      <ProfileReduxForm onSubmit={onSubmit}
        initialValues={props.initialValues}
      />
    </>
  );
  
}



export default ProfileDescriptionForm;

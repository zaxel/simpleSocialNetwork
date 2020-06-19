import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {RequiredFieldTextarea, RenderFieldInput, CreateField} from './../../common/FormsControls/FormsControls';
import {required, minLength, maxLength, isUrlValid, alphaNumeric} from './../../../utils/validators/Validators';
import classes from "./ProfileInfo.module.css";
import {updateProfile} from "./../../../redux/ProfileReducer"

const maxLength20 = maxLength(20);
const maxLength200 = maxLength(200);
const minLeight5 = minLength(5);

const ProfileForm = ({handleSubmit}) => {
  
  return(
    <form onSubmit={handleSubmit} >
      <div>Name:</div>
      {CreateField('NAME', RenderFieldInput, [required, minLeight5, maxLength20], 'userName', 'text', alphaNumeric)}
      <div>About me:</div>
      {CreateField('ABOUT ME', RequiredFieldTextarea, [minLeight5, maxLength200], 'aboutMe', 'text', null)}
      <div>
        <div>Socials:</div>
        <div>WebSite:</div>
        {CreateField('Your WebSite', RenderFieldInput, [minLeight5, maxLength200, isUrlValid], 'webSite', 'text', null)}
        <div>MainLink:</div>
        {CreateField('Main Link', RenderFieldInput, [minLeight5, maxLength200, isUrlValid], 'mainLink', 'text', null)}
        <div>GitHub:</div>
        {CreateField('GitHub', RenderFieldInput, [minLeight5, maxLength200, isUrlValid], 'gitHub', 'text', null)}
        <div>VK:</div>
        {CreateField('VK', RenderFieldInput, [minLeight5, maxLength200, isUrlValid], 'vK', 'text', null)}
        <div>Facebook:</div>
        {CreateField('Facebook', RenderFieldInput, [minLeight5, maxLength200, isUrlValid], 'facebook', 'text', null)}
        <div>Instagram:</div>
        {CreateField('Instagram', RenderFieldInput, [minLeight5, maxLength200, isUrlValid], 'instagram', 'text', null)}
        <div>Twitter:</div>
        {CreateField('Twitter', RenderFieldInput, [minLeight5, maxLength200, isUrlValid], 'twitter', 'text', null)}
        <div>youTube:</div>
        {CreateField('youTube', RenderFieldInput, [minLeight5, maxLength200, isUrlValid], 'youtube', 'text', null)}
      </div>
      <div>Looking For Job:</div>
      {CreateField('', 'input', [], 'lookingForAJob', 'checkbox', null)}
      <div>Job Description:</div>
      {CreateField('Job Description', RequiredFieldTextarea, [minLeight5, maxLength200], 'jobDescription', 'text', null)}
      <div>
                <button >SAVE PROFILE</button>
            </div>
    </form>
  );
}


const ProfileReduxForm = reduxForm({form: "profile"})(ProfileForm);

const ProfileDescriptionForm =(props) => {
  const onSubmit = (formData) =>{
    let userId = props.authorizedUserId;
    // console.log(formData);
    // if(formData)
    
    const profileObject = {
      userId,
      aboutMe: (formData.aboutMe ? formData.aboutMe : "some user description here"),
      contacts: {
          facebook: formData.facebook,
          github: formData.gitHub,
          instagram: formData.instagram,
          mainLink: formData.mainLink,
          twitter: formData.twitter,
          vk: formData.vK,
          website: formData.webSite,
          youtube: formData.youtube
      },
      lookingForAJob: (formData.lookingForAJob ? formData.lookingForAJob : false),
      lookingForAJobDescription: (formData.jobDescription ? formData.jobDescription : "----"),
      fullName: formData.userName

      
    }
    props.updateProfile(profileObject);
     props.deActivateProfileEditMode();
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

import React from 'react';
import classes from "./ProfileInfo.module.css";
import Preloader from './../../common/Preloader/Preloader';
import profileHeader from './../../../assets/images/profileHeader.jpg';
import facebook from './../../../assets/images/socials/facebook.svg';
import vk from './../../../assets/images/socials/vk.svg';
import twitter from './../../../assets/images/socials/twitter.svg';
import instagram from './../../../assets/images/socials/instagram.svg';
import youtube from './../../../assets/images/socials/youtube.svg';
import github from './../../../assets/images/socials/github.svg';
import userPhoto from './../../../assets/images/user.jpg';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if(!props.profile){
    return(
      <Preloader/> 
    );
  }else

  return(
    <div >
      <div>
      
        <img src={profileHeader} />
      </div>
      <div className={classes.descriptionBlock}>
        <div className={classes.userPhoto}>
          <img src={props.profile.photos.small ? props.profile.photos.small : userPhoto} />
        </div>
        <div className={classes.userDescrContainer}>
          <div className={classes.userDescr}>
            <div className={classes.userName}>{props.profile.fullName}</div>
            <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
            <div className={classes.userAbout}>{props.profile.aboutMe ? props.profile.aboutMe : 'Some user descriptions here...'}</div>
            <div className={classes.userSocialsContainer}>
              <div className={classes.userWeb}> 
                WebSite: {props.profile.contacts.website ? <a href={props.profile.contacts.website}>{props.profile.contacts.website}</a> : 'No'}
              </div>
              <div className={classes.userLink}> 
                MainLink: {props.profile.contacts.mainLink ? <a href={props.profile.contacts.mainLink}>{props.profile.contacts.mainLink}</a> : 'No'}
              </div>
              <div className={classes.userSocials}>
                {props.profile.contacts.facebook ? <a href={props.profile.contacts.facebook}><img src={facebook}/></a> : null}
                {props.profile.contacts.vk ? <a href={props.profile.contacts.vk}><img src={vk}/></a> : null}
                {props.profile.contacts.twitter ? <a href={props.profile.contacts.twitter}><img src={twitter}/></a> : null}
                {props.profile.contacts.instagram ? <a href={props.profile.contacts.instagram}><img src={instagram}/></a> : null}
                {props.profile.contacts.youtube ? <a href={props.profile.contacts.youtube}><img src={youtube}/></a> : null}
                {props.profile.contacts.github ? <a href={props.profile.contacts.github}><img src={github}/></a> : null}
              </div>
            </div>
          </div>
          <div className={classes.userJobsSearchBlock}>
            <div className={classes.userJobsSearch}>Looking for the job: 
              {props.profile.lookingForAJob ? 'YES' : 'NO'}
            </div>
            <div className={classes.userJobsSearchDescr}>Descriptions: 
              {props.profile.lookingForAJobDescription 
              ? props.profile.lookingForAJobDescription 
              : 'No descriptions added yet'}
            </div>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  );
}



export default ProfileInfo;

import React from "react";
import classes from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

  return (
    <div >
      <ProfileInfo 
        isOwner={props.isOwner}
        profile={props.profile} 
        status={props.status}
        updateUserStatus={props.updateUserStatus}
        savePhoto={props.savePhoto}/>
      <MyPostsContainer store={props.store}/>
    </div>
  );
};

export default Profile;

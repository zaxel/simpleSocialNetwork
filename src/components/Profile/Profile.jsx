import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={classes.content}>
      <div >
        <div>
          <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" />
        </div>
        <div>
          <img src="https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v1785392215/result.jpeg" />
          descr
        </div>
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;

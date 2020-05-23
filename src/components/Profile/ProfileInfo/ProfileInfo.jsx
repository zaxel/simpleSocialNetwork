import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from './../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
  if(!props.profile){
    return(
      <Preloader/>
    );
  }else

  return(
    <div >
        <div>
          <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" />
        </div>
        <div className={classes.descriptionBlock}>
          {/* <img src="https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v1785392215/result.jpeg" /> */}
          <img src={props.profile.photos.small} />
          descr
        </div>
      </div>
  );
}



export default ProfileInfo;

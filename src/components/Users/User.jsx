import React from 'react';
import classes from './Users.module.css';
import userPhoto from './../../assets/images/user.jpg';
import {NavLink} from 'react-router-dom';


const User = (props) => {
    return( 
            <div  className={classes.item}>
                <div className={classes.usersLeftBlock}>
                    <div className={classes.userPhoto}>
                    <NavLink to={"profile/" + props.user.id}>
                        <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto} />
                    </NavLink>
                       
                    </div>
                    <div className={classes.UserFollowStatus}>
                        {props.user.followed === true 
                        ? <button disabled={props.isFollowingInProgress.some(id => id === props.user.id)} onClick={()=>{
                             props.unFollow(props.user.id);
                        }}> unfollow</button> 
                        : <button disabled={props.isFollowingInProgress.some(id => id === props.user.id)} onClick={()=>{
                                props.follow(props.user.id);
                            }}>follow</button>}
                    </div>
                </div>
                <div className={classes.usersRightBlock}>
                    <div className={classes.userDescr}>
                        <div className={classes.userName}>
                    <NavLink to={"profile/" + props.user.id}>
                        {props.user.name}
                   </NavLink></div>
                        <div className={classes.userStatus}>{props.user.status != null ? props.user.status : "Hey I using FaceBoorks now" }</div>
                    </div>
                    <div className={classes.userLocation}>
                        <div className={classes.userCity}>{"props.user.location.country"}</div>
                        <div className={classes.userCountry}>{"props.user.location.city"}</div>
                    </div>
                </div>
            </div>
            
    );
}



export default User;
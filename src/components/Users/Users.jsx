import React from 'react';
import classes from './Users.module.css'

const Users = (props) =>{
    return (
        props.users.map(u =>  <div key={u.userId} className={classes.item}>
            <div className={classes.usersLeftBlock}>
                <div className={classes.userPhoto}>
                    <img src={u.userPhotoUrl} />
                </div>
                <div className={classes.UserFollowStatus}>
                {u.followed === true ? 
                <button onClick={()=>{props.unFollow(u.userId)}}> unfollow</button> 
                : <button onClick={()=>{props.follow(u.userId)}}>follow</button>}
                </div>
            </div>
            <div className={classes.usersRightBlock}>
                <div className={classes.userDescr}>
                    <div className={classes.userName}>{u.fullName}</div>
                    <div className={classes.userStatus}>{u.status}</div>
                </div>
                <div className={classes.userLocation}>
                    <div className={classes.userCity}>{u.location.country}</div>
                    <div className={classes.userCountry}>{u.location.city}</div>
                </div>
            </div>
        </div>)
    )
}

export default Users;
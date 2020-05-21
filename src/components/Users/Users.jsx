import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from './../../assets/images/user.jpg';


class Users extends React.Component {

    

    componentDidMount = () =>{
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            //debugger;
            this.props.setUser(response.data.items);
        });
    }

    render (){
        return (
            this.props.users.map(u =>  <div key={u.id} className={classes.item}>
                <div className={classes.usersLeftBlock}>
                    <div className={classes.userPhoto}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                    </div>
                    <div className={classes.UserFollowStatus}>
                    {u.followed === true ? 
                    <button onClick={()=>{this.props.unFollow(u.id)}}> unfollow</button> 
                    : <button onClick={()=>{this.props.follow(u.id)}}>follow</button>}
                    </div>
                </div>
                <div className={classes.usersRightBlock}>
                    <div className={classes.userDescr}>
                        <div className={classes.userName}>{u.name}</div>
                        <div className={classes.userStatus}>{u.status != null ? u.status : "Hey I using FaceBoorks now" }</div>
                    </div>
                    <div className={classes.userLocation}>
                        <div className={classes.userCity}>{"u.location.country"}</div>
                        <div className={classes.userCountry}>{"u.location.city"}</div>
                    </div>
                </div>
            </div>)
        );
           
    }
}

export default Users;
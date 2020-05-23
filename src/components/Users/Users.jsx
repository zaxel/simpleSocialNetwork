import React from 'react';
import classes from './Users.module.css';
import userPhoto from './../../assets/images/user.jpg';
import {NavLink} from 'react-router-dom';


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount /props.pageSize);
    let pages = [];

    for(let i=1; i<=pagesCount; i++){
        pages.push(i);
    }


    return( 
    <div>
        <div className={classes.page}> { pages.map(p =>{  
            return <span  className={props.currentPage === p && classes.selectedPage} 
            onClick={(e)=>{props.onPageChanged(p)}}>{p}</span> 
                }) 
            }
            
            {/* <span>1</span>
            <span className={classes.selectedPage}>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span> */}
        </div>
        {
            props.users.map(u =>  <div key={u.id} className={classes.item}>
                <div className={classes.usersLeftBlock}>
                    <div className={classes.userPhoto}>
                    <NavLink to={"profile/" + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                    </NavLink>
                       
                    </div>
                    <div className={classes.UserFollowStatus}>
                    {u.followed === true ? 
                    <button onClick={()=>{props.unFollow(u.id)}}> unfollow</button> 
                    : <button onClick={()=>{props.follow(u.id)}}>follow</button>}
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
        }
                
        </div>
    );
}



export default Users;
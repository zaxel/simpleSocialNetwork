import React from 'react';
import {followAC, unFollowAC, setUsersAC} from './../../redux/UsersReducer'
import Users from "./Users";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users
    //   posts: state.profilePage.posts,
    //   newPostText: state.profilePage.newPostText
    }
  }
  let mapDispatchToProps = (dispatch) =>{
    return{
        follow : (userId) => {
            dispatch(followAC(userId))
        },
        unFollow : (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUser : (users) => {
            dispatch(setUsersAC(users))
        },
        
    //   UpdateNewPostText: (text) => {dispatch(addUpdateNewPostCreator(text))},
    //   addPost: () => {dispatch(addPostActionCreator())}
    }
  }
  
  const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users);
  


export default UsersContainer;
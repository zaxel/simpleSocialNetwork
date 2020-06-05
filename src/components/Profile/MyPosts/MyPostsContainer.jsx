import React from 'react';
import {addPostActionCreator, addUpdateNewPostCreator} from './../../../redux/ProfileReducer'
import MyPosts from "./MyPosts";
import { connect } from "react-redux";



let mapStateToProps = (state) => {
  return{
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) =>{
  return{
    // UpdateNewPostText: (text) => {dispatch(addUpdateNewPostCreator(text))},
    addPost: (text) => {dispatch(addPostActionCreator(text))}
  }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

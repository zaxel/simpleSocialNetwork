import React from "react";
import {addPostActionCreator, addUpdateNewPostCreator} from './../../../redux/ProfileReducer'
import MyPosts from "./MyPosts";
import Profile from "./../Profile";


const MyPostsContainer = (props) => {
  // let postData = [
  //   { id: 1, likes: 12, post: "Hi! How are you?" },
  //   { id: 2, likes: 122, post: "It s my first post." },
  //   { id: 3, likes: 1, post: "Gatsby is the best way to" },
  //   { id: 4, likes: 65, post: "The following toolchains offer more flexibility and choice." },
  //   { id: 5, likes: 3, post: "We recommend them to more experienced users" },
  // ];

  let state = props.store.getState();

  let addPost = ()=>{
    // props.sendMessage();
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
    props.store.dispatch(addUpdateNewPostCreator(text));
  }

  return (
    <MyPosts 
      UpdateNewPostText={onPostChange} 
      addPost={addPost} 
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;

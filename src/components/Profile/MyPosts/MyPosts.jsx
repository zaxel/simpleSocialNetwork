import React from 'react';
import classes from  './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
       My posts
       <div>
         <textarea></textarea>
         <button>Add Post</button>
         <button>Remove</button>
       </div>
       <div>
         <Post message='Hi! How are you?' like='15'/>
         <Post message="It's my first post." like='25'/>
       </div>
    </div>
  );
}

export default MyPosts;
import React from 'react';
import classes from  './Post.module.css';

const Post = () => {
  return (
   <div className={classes.item}>
    <img src='https://download-cs.net/steam/avatars/3447.jpg' />
     post 1
     <div>
      <span>like</span>
     </div>
   </div>
  );
}

export default Post;
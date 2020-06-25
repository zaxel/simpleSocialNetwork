import React from 'react';
import classes from  './Post.module.css';

const Post = (props) => {
  return (
   <div className={classes.item}>
    <div className={classes.postMessageContainer}>
      <img src='https://download-cs.net/steam/avatars/3447.jpg' />
     <div className={classes.postMessage}>{props.message}</div>
    </div>
     <div className={classes.postLikes}>{props.likes} likes</div>
   </div>
  );
}

export default Post;
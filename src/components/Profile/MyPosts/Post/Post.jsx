import React from 'react';
import classes from  './Post.module.css';

const Post = (props) => {
  return (
   <div className={classes.item}>
    <img src='https://download-cs.net/steam/avatars/3447.jpg' />
     {props.message}
     <div>
      <span>{props.like} like</span>
     </div>
   </div>
  );
}

export default Post;
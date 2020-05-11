import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postData = [
    { id: 1, likes: 12, post: 'Hi! How are you?' },
    { id: 2, likes: 122, post: 'It s my first post.'},
    { id: 3, likes: 1, post: 'Gatsby is the best way to'},
    { id: 4, likes: 65, post: 'The following toolchains offer more flexibility and choice.'},
    { id: 5, likes: 3, post: 'We recommend them to more experienced users'},
  ];

  return (
    <div className={classes.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
          <button>Remove</button>
        </div>
      </div>
      <div>
        <Post message={postData[0].post} likes={postData[0].likes} />
        <Post message={postData[1].post} likes={postData[1].likes} />
        <Post message={postData[2].post} likes={postData[2].likes} />
        <Post message={postData[3].post} likes={postData[3].likes} />
        <Post message={postData[4].post} likes={postData[4].likes} />
      </div>
    </div>
  );
};

export default MyPosts;

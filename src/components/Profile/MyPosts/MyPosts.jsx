import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from 'redux-form';
import {RequiredFieldTextarea} from './../../common/FormsControls/FormsControls'
import {required, maxLength} from './../../../utils/validators/Validators';


const maxLength200 = maxLength(200);


const MyPostsMessageForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <Field component={RequiredFieldTextarea} name={'textInput'} validate={[required, maxLength200]}></Field>
      <div>
        <button>Add Post</button>
        {/* <button>Remove</button> */}
      </div>

    </form>
  )
}

const MyPostsReduxMessageForm = reduxForm({form: "myPosts"})(MyPostsMessageForm)

const MyPosts = (props) => {
  // let postData = [
  //   { id: 1, likes: 12, post: "Hi! How are you?" },
  //   { id: 2, likes: 122, post: "It s my first post." },
  //   { id: 3, likes: 1, post: "Gatsby is the best way to" },
  //   { id: 4, likes: 65, post: "The following toolchains offer more flexibility and choice." },
  //   { id: 5, likes: 3, post: "We recommend them to more experienced users" },
  // ];

  let postItem = props.posts.map((post) => (
    <Post key={post.id} message={post.post} likes={post.likes} />
  ));

  let newPostRef = React.createRef();

  let onAddPost = ()=>{
    props.addPost();
    // props.dispatch(addPostActionCreator());
    
  }

  let onPostChange = () => {
    let text = newPostRef.current.value;
    // props.dispatch(addUpdateNewPostCreator(text));
    props.UpdateNewPostText(text);

  }

  const onSubmit = (formData) =>{
    // alert(formData.textInput);
    props.addPost(formData.textInput);
  }

  return (
    <div className={classes.postBlock}>
      <h3>My posts</h3>
      <MyPostsReduxMessageForm onSubmit={onSubmit}/>
      <div>{postItem}</div>
    </div>
  );
};

export default MyPosts;

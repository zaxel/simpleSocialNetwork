const { default: ProfileReducer } = require("./ProfileReducer");
import {addPostActionCreator, deletePostActionCreator} from './ProfileReducer';

let state = {
    posts: [
        { id: 1, likes: 12, post: "Hi! How are you?" },
        { id: 2, likes: 122, post: "It s my first post." },
        { id: 3, likes: 1, post: "Gatsby is the best way to" },
        { id: 4, likes: 65, post: "The following toolchains offer more flexibility and choice."},
        { id: 5, likes: 3, post: "We recommend them to more experienced users" },
      ]
}

test('new post should be added (length of posts incremented)', () => {
    let action = addPostActionCreator('new post');
    let newState = ProfileReducer(state, action);
    expect (newState.posts.length).toBe(6);
  });

test('new post message should be correct', () => {
    let action = addPostActionCreator('new post');
    let newState = ProfileReducer(state, action);
    expect (newState.posts[5].post).toBe('new post');
  });

  test('lenght of posts should be decremented after post deleting', () => {
    let action = deletePostActionCreator(2);
    let newState = ProfileReducer(state, action);
    expect (newState.posts.length).toBe(4);
  });
  
  test('lenght of posts should not be changed while trying to delete post with incorrect postId', () => {
    let action = deletePostActionCreator(100);
    let newState = ProfileReducer(state, action);
    expect (newState.posts.length).toBe(5);
  });